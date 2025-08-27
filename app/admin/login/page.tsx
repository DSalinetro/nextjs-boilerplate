"use client";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { loginAction } from "../actions";

export default function AdminLoginPage() {
  const params = useSearchParams();
  const next = params.get("next") || "/admin";
  const [state, formAction] = useActionState(async (_prev, formData: FormData) => {
    const res = await loginAction(formData);
    return res ?? { ok: true };
  }, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-sm rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="next" value={next} />
          <label className="block">
            <span className="text-sm text-gray-700">Password</span>
            <input type="password" name="password" required className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </label>
          {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
          <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-white text-sm hover:bg-gray-800">Sign In</button>
        </form>
      </div>
    </div>
  );
}
