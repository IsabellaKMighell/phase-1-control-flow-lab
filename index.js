
function scuberGreetingForFeet(feet){
  let msg;
  if(feet<=400){
    msg = 'This one is on me!';
  }
  else if(2000 < feet && feet< 2500){
    msg = 'I will gladly take your thirty bucks.';
  }
  else if(feet>2500){
    msg = 'No can do.';
  }
  return msg
}


function ternaryCheckCity(city){
  const isNYC = city === "NYC"? "Ok, sounds good.": "No go.";
  return isNYC;
}


function switchOnCharmFromTip(tip){
  let gratitude;

  switch(tip){
    case 'generous':
      gratitude= "Thank you so much.";
      break;
    case 'not as generous':
      gratitude = "Thank you.";
      break;
    default:
      gratitude = 'Bye.';
     }

  return gratitude;
}