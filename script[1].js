function register(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  document.getElementById('formmsg').textContent=`Thanks, ${name}! Your demo registration interest has been recorded on this page.`;
  e.target.reset();
  return false;
}
function setDonation(amount){document.getElementById('donationAmount').value=amount;}
function donate(){
  const amount=document.getElementById('donationAmount').value;
  const msg=document.getElementById('donationMsg');
  if(!amount || Number(amount)<=0){msg.textContent='Please choose or enter a donation amount.';return;}
  msg.textContent=`Thank you! Your proposed $${Number(amount).toFixed(2)} donation has been recorded for this project demo.`;
}
