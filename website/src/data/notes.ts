export type Category = "javascript" | "java" | "java-oop" | "sad";

export type Tag =
  | "fundamentals"
  | "variables"
  | "operators"
  | "control-flow"
  | "loops"
  | "functions"
  | "strings"
  | "data-structures"
  | "io"
  | "formatting"
  | "math"
  | "types"
  | "dom"
  | "oop-basics"
  | "inheritance"
  | "polymorphism"
  | "encapsulation"
  | "advanced-oop"
  | "collections"
  | "concurrency"
  | "file-io"
  | "error-handling";

export interface Note {
  id: string;
  title: string;
  category: Category;
  tags: Tag[];
  filePath: string;
  description: string;
  connections: string[]; // IDs of related notes
}

export const categoryMeta: Record<Category, { label: string; color: string; accent: string }> = {
  javascript: { label: "JavaScript", color: "#f7df1e", accent: "oklch(0.85 0.18 90)" },
  java: { label: "Java", color: "#e07830", accent: "oklch(0.7 0.18 55)" },
  "java-oop": { label: "Java OOP", color: "#e05050", accent: "oklch(0.65 0.2 25)" },
  sad: { label: "System Analysis", color: "#2d9d6a", accent: "oklch(0.65 0.18 160)" },
};

export const tagLabels: Record<Tag, string> = {
  fundamentals: "Fundamentals",
  variables: "Variables",
  operators: "Operators",
  "control-flow": "Control Flow",
  loops: "Loops",
  functions: "Functions",
  strings: "Strings",
  "data-structures": "Data Structures",
  io: "Input / Output",
  formatting: "Formatting",
  math: "Math",
  types: "Types",
  dom: "DOM / Web",
  "oop-basics": "OOP Basics",
  inheritance: "Inheritance",
  polymorphism: "Polymorphism",
  encapsulation: "Encapsulation",
  "advanced-oop": "Advanced OOP",
  collections: "Collections",
  concurrency: "Concurrency",
  "file-io": "File I/O",
  "error-handling": "Error Handling",
};

const js = (id: string, title: string, tags: Tag[], desc: string, connections: string[]): Note => ({
  id: `js-${id}`,
  title,
  category: "javascript",
  tags,
  filePath: `javascript/Notes/${id}.md`,
  description: desc,
  connections: connections.map((c) => (c.startsWith("java-") || c.startsWith("js-") ? c : `js-${c}`)),
});

const jv = (id: string, title: string, tags: Tag[], desc: string, connections: string[]): Note => ({
  id: `java-${id}`,
  title,
  category: "java",
  tags,
  filePath: `java/Notes/${id}.md`,
  description: desc,
  connections: connections.map((c) => (c.startsWith("java-") || c.startsWith("js-") ? c : `java-${c}`)),
});

const oop = (id: string, title: string, tags: Tag[], desc: string, connections: string[]): Note => ({
  id: `java-oop-${id}`,
  title,
  category: "java-oop",
  tags,
  filePath: `java/Notes/oop/${id}.md`,
  description: desc,
  connections: connections.map((c) => (c.startsWith("java-") || c.startsWith("js-") ? c : `java-oop-${c}`)),
});

export const notes: Note[] = [
  // ─── JavaScript ────────────────────────────────────────
  js("Variables", "Variables", ["fundamentals", "variables"], "Declaration, assignment, let vs const, template literals", ["Datatypes", "Constants", "js-Type_Conversion", "java-variables"]),
  js("Datatypes", "Data Types", ["fundamentals", "types"], "Numbers, strings, booleans, typeof operator, dynamic typing", ["Variables", "js-Type_Conversion", "java-variables"]),
  js("Constants", "Constants", ["fundamentals", "variables"], "Const declarations, string concatenation, template literals", ["Variables", "Datatypes"]),
  js("Basic_Setup", "Basic Setup", ["fundamentals", "dom"], "Linking JS to HTML, alert/prompt/console, DOM manipulation", ["User_Input", "Checked_Property"]),
  js("Arithmetic_Operators", "Arithmetic Operators", ["operators"], "Basic math operators, augmented assignment, increment/decrement, PEMDAS", ["Variables", "java-Operators"]),
  js("Logical_Operators", "Logical Operators", ["operators", "control-flow"], "AND, OR, NOT operators for boolean logic", ["If_Statements", "java-logical_operators"]),
  js("Strict_Equality", "Strict Equality", ["operators", "types"], "Strict vs loose equality, type comparison", ["js-Type_Conversion", "Datatypes"]),
  js("Type_Conversion", "Type Conversion", ["types"], "String/Number/Boolean conversion, truthy/falsy, type coercion", ["Datatypes", "Variables"]),
  js("If_Statements", "If Statements", ["control-flow"], "If/else/else-if, nested conditions, boolean checks", ["Logical_Operators", "Ternary_Operator", "Switches", "java-if_statements"]),
  js("Switches", "Switch Statements", ["control-flow"], "Switch/case/default, break usage, vs else-if", ["If_Statements", "java-enhanced_switches"]),
  js("Ternary_Operator", "Ternary Operator", ["control-flow"], "Shorthand conditional: condition ? a : b", ["If_Statements", "java-ternary_operator"]),
  js("While_Loops", "While Loops", ["loops"], "While loops, do-while, input validation patterns", ["java-while_loops", "java-for_loops"]),
  js("Array_Functions", "Array Functions", ["functions", "data-structures"], "Spread, rest, callbacks, forEach, map, filter, reduce, arrow functions", ["String_Methods", "java-arrays"]),
  js("String_Methods", "String Methods", ["strings"], "charAt, indexOf, toUpperCase, trim, replace, slice, method chaining", ["Datatypes", "java-string_methods"]),
  js("Math_Objects", "Math Objects", ["math"], "PI, round, floor, ceil, pow, sqrt, trig functions, max/min", ["Arithmetic_Operators", "java-math_class"]),
  js("User_Input", "User Input", ["io", "dom"], "window.prompt() for user input, always returns string", ["Basic_Setup", "js-Type_Conversion"]),
  js("Checked_Property", "Checked Property", ["dom"], "HTML checkbox/radio .checked property, form handling", ["Basic_Setup", "User_Input"]),
  js("javascript_notes", "JS Notes Index", ["fundamentals"], "Overview and index of JavaScript notes", ["Variables", "Datatypes"]),

  // ─── Java Core ─────────────────────────────────────────
  jv("Basic_programs", "Basic Programs", ["fundamentals"], "Adding integers, swapping numbers, floating-point multiplication", ["variables", "Operators"]),
  jv("Outputting_Text", "Outputting Text", ["fundamentals", "io"], "System.out.print vs println, basic output", ["escape_sequences", "printf_statements"]),
  jv("escape_sequences", "Escape Sequences", ["fundamentals", "formatting"], "Newline, tab, quote, backslash escape characters", ["Outputting_Text"]),
  jv("comments", "Comments", ["fundamentals"], "Single-line and multi-line comments in Java", ["Class"]),
  jv("Class", "Class Structure", ["fundamentals", "oop-basics"], "Class structure, main method, program entry point", ["comments", "java-oop-classes"]),
  jv("variables", "Variables", ["fundamentals", "variables"], "Primitive types, reference types, declaration vs assignment", ["Operators", "js-Variables"]),
  jv("Operators", "Operators", ["operators"], "Arithmetic, augmented assignment, increment/decrement, PEMDAS", ["variables", "js-Arithmetic_Operators"]),
  jv("if_statements", "If Statements", ["control-flow"], "If/else/else-if, multiple conditions, user input with conditionals", ["logical_operators", "Control_Statements", "js-If_Statements"]),
  jv("Control_Statements", "Control Statements", ["control-flow"], "Even/odd, vowel check, largest of 3, leap year, calculator", ["if_statements", "enhanced_switches"]),
  jv("logical_operators", "Logical Operators", ["operators", "control-flow"], "AND, OR, NOT operators, condition chaining", ["if_statements", "js-Logical_Operators"]),
  jv("enhanced_switches", "Enhanced Switches", ["control-flow"], "Java 14+ switch expressions with -> operator", ["Control_Statements", "js-Switches"]),
  jv("ternary_operator", "Ternary Operator", ["control-flow"], "Conditional shorthand: pass/fail, even/odd, tax rates", ["if_statements", "js-Ternary_Operator"]),
  jv("while_loops", "While Loops", ["loops"], "While, do-while, infinite loops, input validation", ["for_loops", "break_and_continue", "js-While_Loops"]),
  jv("for_loops", "For Loops", ["loops"], "For loop syntax, counting, custom steps, user-controlled loops", ["while_loops", "nested_loops"]),
  jv("break_and_continue", "Break & Continue", ["loops", "control-flow"], "Break exits loop, continue skips iteration", ["while_loops", "for_loops"]),
  jv("nested_loops", "Nested Loops", ["loops"], "Outer/inner loop interaction, DRY principle, matrix printing", ["for_loops", "Iterative_Programs"]),
  jv("Iterative_Programs", "Iterative Programs", ["loops", "functions"], "Sum, factorial, fibonacci, palindrome, prime, patterns", ["nested_loops", "for_loops", "methods"]),
  jv("methods", "Methods", ["functions"], "Method definition, parameters, return values, visibility", ["overloaded_methods", "variable_scope"]),
  jv("overloaded_methods", "Overloaded Methods", ["functions"], "Same name, different parameters, method signatures", ["methods", "java-oop-method_overloading"]),
  jv("variable_scope", "Variable Scope", ["functions", "variables"], "Local vs class scope, variable precedence", ["methods", "variables"]),
  jv("accepting_user_input", "User Input (Scanner)", ["io"], "Scanner class, nextInt/nextDouble/nextLine, buffer clearing", ["Outputting_Text", "js-User_Input"]),
  jv("printf_statements", "Printf Statements", ["io", "formatting"], "Format specifiers, precision, flags, width, padding", ["Outputting_Text"]),
  jv("arrays", "Arrays", ["data-structures"], "Declaration, zero-indexing, length, for-each, Arrays.sort/fill", ["java-oop-array_of_objects", "java-oop-array_lists", "js-Array_Functions"]),
  jv("hashmaps", "HashMaps", ["data-structures", "collections"], "HashMap put/get/remove, containsKey/Value, key uniqueness", ["arrays"]),
  jv("dates_and_times", "Dates & Times", ["types"], "LocalDate, LocalTime, LocalDateTime, formatting, comparison", ["string_methods"]),
  jv("math_class", "Math Class", ["math"], "PI, round, ceil, floor, pow, sqrt, abs, max/min, geometry", ["random_class", "js-Math_Objects"]),
  jv("random_class", "Random Class", ["math"], "nextInt, nextDouble, nextBoolean, dice/coin simulations", ["math_class"]),
  jv("string_methods", "String Methods", ["strings"], "length, charAt, indexOf, toUpperCase, trim, replace, equals", ["substrings", "js-String_Methods"]),
  jv("substrings", "Substrings", ["strings"], "substring(start, end), dynamic substring with indexOf, email parser", ["string_methods"]),
  jv("nested_if_statements", "Nested If Statements", ["control-flow"], "Multi-level conditional nesting", ["if_statements", "logical_operators"]),

  // ─── Java OOP ──────────────────────────────────────────
  oop("classes", "Classes", ["oop-basics"], "Class as blueprint, attributes/fields, structure and instantiation", ["objects", "constructors", "java-Class"]),
  oop("objects", "Objects", ["oop-basics"], "Creating objects, dot notation, modifying attributes, methods in classes", ["classes", "constructors"]),
  oop("constructors", "Constructors", ["oop-basics"], "Parameterized constructors, this keyword, default constructors", ["classes", "objects", "overloaded_constructors"]),
  oop("overloaded_constructors", "Overloaded Constructors", ["oop-basics", "functions"], "Multiple constructor versions with different parameters", ["constructors", "java-overloaded_methods"]),
  oop("static", "Static Keyword", ["oop-basics"], "Static fields, static methods, class-level vs instance-level", ["classes", "objects"]),
  oop("getters_and_setters", "Getters & Setters", ["encapsulation"], "Encapsulation pattern, controlled access to private fields", ["classes", "objects"]),
  oop("tostring", "toString Method", ["oop-basics"], "Overriding toString() for custom object string representation", ["objects", "classes"]),
  oop("inheritance", "Inheritance", ["inheritance"], "Parent-child class relationships, extends keyword, inherited members", ["classes", "polymorphism", "multi-level_inheritance", "supers"]),
  oop("multi-level_inheritance", "Multi-Level Inheritance", ["inheritance"], "Chaining inheritance across multiple levels", ["inheritance", "supers"]),
  oop("supers", "Super Keyword", ["inheritance"], "Accessing parent class constructors and methods with super", ["inheritance", "constructors"]),
  oop("method_overloading", "Method Overloading", ["polymorphism", "functions"], "Same method name, different parameters, method signature", ["java-overloaded_methods", "polymorphism"]),
  oop("polymorphism", "Polymorphism", ["polymorphism"], "Objects as superclass/interface, dynamic dispatch, @Override", ["inheritance", "abstraction", "runtime_polymorphism"]),
  oop("runtime_polymorphism", "Runtime Polymorphism", ["polymorphism"], "Runtime type checking, dynamic method resolution", ["polymorphism", "inheritance"]),
  oop("abstraction", "Abstraction", ["polymorphism", "advanced-oop"], "Abstract classes/methods, cannot instantiate, must implement", ["polymorphism", "interface"]),
  oop("interface", "Interfaces", ["advanced-oop"], "Interface definition and implementation, contract pattern", ["abstraction", "multiple_interfaces"]),
  oop("multiple_interfaces", "Multiple Interfaces", ["advanced-oop"], "Implementing multiple interfaces in a single class", ["interface"]),
  oop("aggregation", "Aggregation", ["advanced-oop"], "Has-a relationships, loose coupling between objects", ["composition", "classes"]),
  oop("composition", "Composition", ["advanced-oop"], "Part-of relationships, strong ownership between objects", ["aggregation", "classes"]),
  oop("array_of_objects", "Array of Objects", ["data-structures", "oop-basics"], "Arrays containing object instances", ["java-arrays", "classes", "objects"]),
  oop("array_lists", "ArrayLists", ["collections", "data-structures"], "Dynamic arrays, add/remove/get, auto-resizing", ["java-arrays", "wrapper_classes"]),
  oop("wrapper_classes", "Wrapper Classes", ["types", "collections"], "Boxing/unboxing primitives for collections", ["array_lists", "java-variables"]),
  oop("generic", "Generics", ["advanced-oop", "types"], "Generic types for type-safe collections and methods", ["array_lists", "wrapper_classes"]),
  oop("enums", "Enums", ["types", "oop-basics"], "Enumeration types, named constants", ["classes"]),
  oop("anonymous_classes", "Anonymous Classes", ["advanced-oop"], "Anonymous inner classes for one-off implementations", ["interface", "abstraction"]),
  oop("exception_handling", "Exception Handling", ["error-handling"], "Try/catch/finally, exception types, throwing exceptions", ["classes"]),
  oop("reading_files", "Reading Files", ["file-io"], "File input using Scanner/BufferedReader", ["java-accepting_user_input", "writing_files"]),
  oop("writing_files", "Writing Files", ["file-io"], "File output, writing data to files", ["reading_files"]),
  oop("timer_tasks", "Timer Tasks", ["concurrency"], "Scheduling tasks with Timer and TimerTask", ["threads"]),
  oop("threads", "Threads", ["concurrency"], "Thread basics, creating and running threads", ["multithreading", "timer_tasks"]),
  oop("multithreading", "Multithreading", ["concurrency"], "Concurrent execution, thread management", ["threads"]),
];

// Build lookup map
export const notesMap = new Map<string, Note>();
notes.forEach((n) => notesMap.set(n.id, n));

// Get connected notes for a given note
export function getConnections(noteId: string): Note[] {
  const note = notesMap.get(noteId);
  if (!note) return [];
  return note.connections.map((id) => notesMap.get(id)).filter(Boolean) as Note[];
}

// Get notes by category
export function getNotesByCategory(category: Category): Note[] {
  return notes.filter((n) => n.category === category);
}

// Get notes by tag
export function getNotesByTag(tag: Tag): Note[] {
  return notes.filter((n) => n.tags.includes(tag));
}

// Search notes
export function searchNotes(query: string): Note[] {
  const q = query.toLowerCase();
  return notes.filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.description.toLowerCase().includes(q) ||
      n.tags.some((t) => t.includes(q)) ||
      n.category.includes(q)
  );
}
