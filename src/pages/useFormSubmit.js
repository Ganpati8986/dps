// ─── Shared submission hook for all school enquiry/contact forms ──────────────
// All three forms (Admission, Contact, EnquiryModal) post identical fields to
// the same Google Apps Script endpoint.

import { useState } from "react";

export const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxXu9v-2mDg9jCmOeYg_UaKWibku5Dn5CmcOqNp2CvZdQDBfOLcPu6m0H5IzbgdyXLb/exec";

/**
 * useFormSubmit — manages form state + submission for every enquiry form.
 *
 * Returns:
 *  form        — { studentName, parentName, email, phone, class }
 *  setField    — (name, value) => void
 *  handleChange — React onChange handler
 *  submit      — async () => void
 *  status      — "idle" | "loading" | "success" | "error"
 *  reset       — resets to idle + clears form
 */
export function useFormSubmit() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    class: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const setField = (name, value) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const submit = async (e) => {
    if (e?.preventDefault) e.preventDefault();

    // Basic client-side guard
    if (!form.studentName.trim() || !form.phone.trim()) return;

    setStatus("loading");
    try {
      // Apps Script requires no-cors for simple fetch — use a form-data POST
      // to avoid CORS preflight issues with JSON content-type
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));

      // Google Apps Script: POST with FormData (multipart) is NOT parsed by
      // e.postData — we must use URL-encoded or JSON via fetch with no-cors.
      // Safest cross-origin approach: fetch with mode:"no-cors" + JSON body
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // GAS doesn't set CORS headers; we can't read the response
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // With no-cors we can't read the response, so optimistically succeed
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setForm({ studentName: "", parentName: "", email: "", phone: "", class: "" });
  };

  return { form, handleChange, setField, submit, status, reset };
}
