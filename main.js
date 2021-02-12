var people = [
    "Dad (Anish)","Mom (Salima)","Sister (Zeeana)","Me (Suhaan)"
  ];var reasons = [
    "Dad (Anish)",
    "Mom (Salima)",
    "Sister (Zeeana)",
    "Me (Suhaan)"
  
  var images = [
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.3&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ-ijbv5jc1jjaye-WItABled-R7mlTWWG75RQpzqZ7PcfOSDmqNRKLO71IXT-coUKbhGbgFl9q2T0PHCb41Gx5LbbKklBZJuP_gkdT8v5wb-knt4UkGgF_Te-g&ats=2524608000000&sz=w1366-h625",
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.5&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ-oNKDagcvXYzST4b8IZjHsu5Aj8uHkj6O6SUHDn0poT-6IhNAYMFHDY5FUXjRooj7egT8uZQYv_ieoKIy27sFtCCMuLCj78eq_s6QJHAahyjZuY19aCjkhxPk&ats=2524608000000&sz=w1366-h625",
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.0&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ9qy7sUyZJ2ImYI8x1doxAEDBnOOsA-ADMjFk-5yEniBE7YuLKCdq_lb_5N_f3yHDt4238pcIzSuRYIRUiNRIZKTkfSQLg-XfaQzTz-jcgmTQ4GwfEyTZiKooU&ats=2524608000000&sz=w1366-h625",
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.2&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ9v9T9qoihun_wAMqW-XXiGj6LUEYeu1wKyzwAFojTDB22qQ0xqdk7hqhdvwBArj9LOT1buAbi6izZizoSptcuH6TtFN1c-lGDnV5xbQCNUglnGnaO9vEnRKdM&ats=2524608000000&sz=w1366-h625"
  ];
  
  var images = [
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.3&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ-ijbv5jc1jjaye-WItABled-R7mlTWWG75RQpzqZ7PcfOSDmqNRKLO71IXT-coUKbhGbgFl9q2T0PHCb41Gx5LbbKklBZJuP_gkdT8v5wb-knt4UkGgF_Te-g&ats=2524608000000&sz=w1366-h625",
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.5&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ-oNKDagcvXYzST4b8IZjHsu5Aj8uHkj6O6SUHDn0poT-6IhNAYMFHDY5FUXjRooj7egT8uZQYv_ieoKIy27sFtCCMuLCj78eq_s6QJHAahyjZuY19aCjkhxPk&ats=2524608000000&sz=w1366-h625",
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.0&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ9qy7sUyZJ2ImYI8x1doxAEDBnOOsA-ADMjFk-5yEniBE7YuLKCdq_lb_5N_f3yHDt4238pcIzSuRYIRUiNRIZKTkfSQLg-XfaQzTz-jcgmTQ4GwfEyTZiKooU&ats=2524608000000&sz=w1366-h625",
"https://mail.google.com/mail/u/3?ui=2&ik=7c46afe388&attid=0.2&permmsgid=msg-f:1690895813864304905&th=177744c8b193b109&view=fimg&disp=thd&attbid=ANGjdJ9v9T9qoihun_wAMqW-XXiGj6LUEYeu1wKyzwAFojTDB22qQ0xqdk7hqhdvwBArj9LOT1buAbi6izZizoSptcuH6TtFN1c-lGDnV5xbQCNUglnGnaO9vEnRKdM&ats=2524608000000&sz=w1366-h625"
  ];

  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
  }