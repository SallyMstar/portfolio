<?php
  // URL for API request
  $url =  'https://resellertest.enom.com/interface.asp?command=check&sld=enom&tld=com&responsetype=xml&uid=Churchmouse&pw=SaJoL@2557';
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
