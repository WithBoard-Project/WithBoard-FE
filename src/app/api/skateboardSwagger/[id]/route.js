export async function DELETE(request, { params }) {
  const result = await fetch(`http://localhost:8080/api/home/affectionPost/${id}`, {
    method: 'DELTE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const inner = await result.json()

  if (inner.code !== 0) {
    inner.result = []
  }
  const reviewSearchData = inner.result

  return new Response(JSON.stringify({ data: reviewSearchData }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
