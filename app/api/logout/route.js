// export async function GET() {
//   return new Response('Logged out', {
//     status: 200,
//     headers: { 'Set-Cookie': `token=; path=/; max-age=0` },
//   });
// }


// app/api/logout/route.js
export async function GET() {
  return new Response(JSON.stringify({ message: "Logged out" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      // clear cookie
      "Set-Cookie": `token=; Path=/; HttpOnly; Max-Age=0`,
    },
  });
}
