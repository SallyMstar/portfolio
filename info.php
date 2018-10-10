<?php
  // URL for API request
  $url =  'https://resellertest.enom.com/interface.asp?command=check&sld=enom&tld=com&responsetype=xml&uid=Churchmouse&pw=7SX6NILVUF4Z74PBJ3LOXOLAQ6BRLG6I2ERQC6X5';
  // Load the API results into a SimpleXML object
  $xml = simplexml_load_file($url);

  // Read the results
  $rrpCode = $xml->RRPCode;
  $rrpText = $xml->RRPText;

  // Perform actions based on results
  switch ($rrpCode) {
    case 210:
	  echo "Domain available";
	  break;
	case 211:
	  echo "Domain not available";
	  break;
	default:
	  echo $rrpCode . ' ' . $rrpText;
      break;
  }
?>
