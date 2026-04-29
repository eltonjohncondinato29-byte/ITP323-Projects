function booWho(val) {
  return typeof val === "boolean";
}

// ── Test Runner ──────────────────────────────────────────
let passed = 0;
let failed = 0;

function test(description, actual, expected) {
  if (actual === expected) {
    console.log(` PASS: ${description}`);
    passed++;
  } else {
    console.log(`FAIL: ${description} → got ${actual}, expected ${expected}`);
    failed++;
  }
}

// ── Tests ────────────────────────────────────────────────
test("booWho function exists",       typeof booWho === "function", true);
test("booWho(true) returns true",    booWho(true),                 true);
test("booWho(false) returns true",   booWho(false),                true);
test("booWho([1,2,3]) returns false",booWho([1, 2, 3]),            false);
test("booWho([].slice) returns false",booWho([].slice),            false);
test('booWho({"a":1}) returns false',booWho({ "a": 1 }),           false);
test("booWho(1) returns false",      booWho(1),                    false);
test("booWho(NaN) returns false",    booWho(NaN),                  false);
test('booWho("a") returns false',    booWho("a"),                  false);
test('booWho("true") returns false', booWho("true"),               false);
test('booWho("false") returns false',booWho("false"),              false);

// ── Summary ──────────────────────────────────────────────
console.log(`\nResults: ${passed} passed, ${failed} failed`);
