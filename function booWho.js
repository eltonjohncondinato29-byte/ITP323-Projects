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

// ── Summary ──────────────────────────────────────────────
console.log(`\nResults: ${passed} passed, ${failed} failed`);
