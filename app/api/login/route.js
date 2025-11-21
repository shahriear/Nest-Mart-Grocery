// app/api/login/route.js
export async function POST(req) {
  try {
    const { email, pass } = await req.json();

    // simple dummy auth check
    if (email === 'test@gmail.com' && pass === '123456') {
      return new Response(JSON.stringify({ message: 'Logged in' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          // HttpOnly cookie that expires in 1 day
          'Set-Cookie': `token=valid; Path=/; HttpOnly; Max-Age=86400`,
        },
      });
    }

    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Bad Request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
