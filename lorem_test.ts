import { assertEquals } from "@std/assert";
import { words } from "./lorem.ts";

Deno.test(function wordsTest() {
    assertEquals(words(2), "lorem lorem ");
  });