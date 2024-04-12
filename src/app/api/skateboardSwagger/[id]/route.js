export async function DELETE(request, { params }) {
  const id = params.id
  const result = await fetch(`http://43.200.173.121/api/home/affectionPost/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const inner = await result.json()

  console
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

export async function PUT(request, { params }) {
  const formData = await request.formData()
  const body = Object.fromEntries(formData)
  const id = params.id
  const result = await fetch(`http://43.200.173.121/api/home/affectionPost/${id}`, {
    method: 'PUT',
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
