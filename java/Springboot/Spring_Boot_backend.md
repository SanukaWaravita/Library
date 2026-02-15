# Spring Boot Backend Cheatsheet

# 1. Setup & Run

```bash
# Create new Spring Boot project
curl https://start.spring.io/starter.zip -d dependencies=web,jpa,h2 -d name=myapp -o myapp.zip

# Or use Spring Initializr (https://start.spring.io)

# Run application
./mvnw spring-boot:run
# or
java -jar target/myapp-0.0.1-SNAPSHOT.jar
```

# 2. Application Structure

```java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

# 3. REST Controllers

```java
@RestController
@RequestMapping("/api")
public class UserController {
    
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }
    
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
    
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }
}
```

# 4. JPA Entities

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true)
    private String email;
    
    // Constructors, getters, setters
}
```

# 5. Repositories

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
    Optional<User> findByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain%")
    List<User> findByEmailDomain(@Param("domain") String domain);
}
```

# 6. Services

```java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    
    public User save(User user) {
        return userRepository.save(user);
    }
}
```

# 7. Configuration Properties

```yaml
# application.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password: 
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
```

# 8. Exception Handling

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFound(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(ex.getMessage());
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneral(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Something went wrong");
    }
}
```

# 9. Validation

```java
public class User {
    @NotNull
    @Size(min = 2, max = 50)
    private String name;
    
    @Email
    @NotBlank
    private String email;
    
    @Min(18)
    private Integer age;
}

// In controller
@PostMapping("/users")
public User createUser(@Valid @RequestBody User user) {
    return userService.save(user);
}
```

# 10. Security (Basic)

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> 
            auth.requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated())
            .httpBasic();
        return http.build();
    }
}
```

# 11. JWT Authentication

```java
@Component
public class JwtUtil {
    private String secret = "mySecret";
    
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24h
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }
    
    public Boolean validateToken(String token, String username) {
        String tokenUsername = extractUsername(token);
        return tokenUsername.equals(username) && !isTokenExpired(token);
    }
}
```

# 12. Testing

```java
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserServiceTest {
    
    @Autowired
    private UserService userService;
    
    @Test
    void testFindById() {
        User user = new User("John", "john@email.com");
        User saved = userService.save(user);
        
        User found = userService.findById(saved.getId());
        assertThat(found.getName()).isEqualTo("John");
    }
}
```

# 13. Profiles

```yaml
# application-dev.yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/devdb
  jpa:
    hibernate:
      ddl-auto: update

---
# application-prod.yml
spring:
  datasource:
    url: ${DATABASE_URL}
  jpa:
    hibernate:
      ddl-auto: validate
```

# 14. Actuator (Monitoring)

```yaml
# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: always
```

# 15. Caching

```java
@EnableCaching
@Configuration
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("users");
    }
}

@Service
public class UserService {
    
    @Cacheable("users")
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    @CacheEvict(value = "users", key = "#id")
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
```

# 16. Scheduling

```java
@Component
@EnableScheduling
public class ScheduledTasks {
    
    @Scheduled(fixedRate = 5000) // Every 5 seconds
    public void reportCurrentTime() {
        System.out.println("Current time: " + new Date());
    }
    
    @Scheduled(cron = "0 0 8 * * ?") // Daily at 8 AM
    public void sendDailyReport() {
        // Send report logic
    }
}
```