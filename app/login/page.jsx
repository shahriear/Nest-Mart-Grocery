'use client';
import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const emailSuggestions = [
    'user@example.com',
    'test@gmail.com',
    'hello@world.com',
  ];

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pass: password }),
      });

      if (res.ok) {
        toast.success('Login successful!');
        setTimeout(() => {
          window.location.href = '/account';
        }, 1000);
      } else {
        const data = await res.json();
        toast.error(data?.message || 'Wrong credentials');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-26 flex items-center justify-center bg-red-50 p-4">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000, // 3 seconds
          style: {
            width: "300px",
            borderRadius: '10px',
            background: '#fff',
            color: '#333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          },
        }}
      />

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: Illustration */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="/images/login-1.png"
            alt="promo"
            className="w-fit rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Login to access your account and orders.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <div className="mt-1 flex items-center border rounded-lg px-3 py-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  list="email-suggestions"
                  placeholder="example@gmail.com"
                  className="flex-1 outline-none pl-3"
                />
                <datalist id="email-suggestions">
                  {emailSuggestions.map((e, i) => (
                    <option key={i} value={e} />
                  ))}
                </datalist>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="mt-1 flex items-center border rounded-lg px-3 py-2">
                <Lock className="w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 outline-none pl-3"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link
                href="/forgot-password"
                className="text-green-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-400 text-sm">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              href="/register"
              className="text-green-600 font-semibold ml-2 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
