async function code (){
  const coder = await fetch('/api/dining');
  const coding = await coder.json();
  const cool = coding.data;
  const dine = document.querySelector('.car');

  cool.forEach((element) => {
  const king = document.createElement('tr');
  king.innerHTML = `
  <td>${element.hall_id}</td>
  <td>${element.hall_name}</td>
  <td>${element.hall_address}</td> `;
  dine.append(king)
    
  });

} 
window.onload = code();