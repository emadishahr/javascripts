const ac = new AbortController();
navigator.credentials.get({
  otp: { transport:['sms'] },
  signal: ac.signal
}).then(result => {
  // the code is in result.code
  input.value = result.code;
  if (form) form.submit();
}).catch(err => {
  console.log(err);
});