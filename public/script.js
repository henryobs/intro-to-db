function updateItemToDelete (productId) {
  document.getElementById('deleteId').value = productId;
}

async function deleteItem() {
  const productId = document.getElementById('deleteId').value;

  const resp = await fetch(`http://localhost:9000/product/${productId}`, {
    method: "DELETE"
  });

  const data = await resp.json();

  if (resp.status === 200) {
    location.reload();
  } else {
    alert(data.message);
  }
}

async function addProduct() {
  const name = document.querySelector("input[name='name']").value;
  const price = document.querySelector("input[name='price']").value;
  const quantity = document.querySelector("input[name='quantity']").value;
  const img = document.querySelector("input[name='img']").value;

  const resp = await fetch('http://localhost:9000/product', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ 
      name,
      price: Number(price),
      quantity: Number(quantity),
      img
    })
  })

  const data = await resp.json()
  if (resp.status == 200) {
    location.reload()
  } else {
    alert(data.message);
  }
}