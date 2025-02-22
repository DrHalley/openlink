"use server";

import { signOut } from "@/auth";

export async function signOutAction() {
  // Burada signOut işlevini tanımla
  await signOut();
}
