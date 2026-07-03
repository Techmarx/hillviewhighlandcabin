"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  arrivalDate: "",
  departureDate: "",
  guests: "2",
  message: "",
};

export function InquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        guests: Number(form.guests),
      }),
    });

    const data = (await response.json()) as { error?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.error || "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("Thanks. Your enquiry has been sent and saved.");
    setForm(initialState);
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          name="name"
          type="text"
          placeholder="Jamie MacLeod"
        />
      </label>

      <label>
        Email
        <input
          required
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          name="email"
          type="email"
          placeholder="jamie@example.com"
        />
      </label>

      <div className="inline-fields">
        <label>
          Arrival
          <input
            required
            value={form.arrivalDate}
            onChange={(event) => setForm({ ...form, arrivalDate: event.target.value })}
            name="arrivalDate"
            type="date"
          />
        </label>

        <label>
          Departure
          <input
            required
            value={form.departureDate}
            onChange={(event) => setForm({ ...form, departureDate: event.target.value })}
            name="departureDate"
            type="date"
          />
        </label>
      </div>

      <label>
        Guests
        <select
          value={form.guests}
          onChange={(event) => setForm({ ...form, guests: event.target.value })}
          name="guests"
        >
          {Array.from({ length: 8 }, (_, index) => index + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      <label>
        Notes
        <textarea
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          name="message"
          rows={5}
          placeholder="Tell us about your stay, children, dogs, or anything else helpful."
        />
      </label>

      <button type="submit" className="button button-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>

      {message ? (
        <p className={status === "error" ? "form-message error" : "form-message success"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
