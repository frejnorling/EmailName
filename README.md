EmailName
=========

Extract perfectly formated names from emails even from UTF-8 emails.

Install
---
    bower install emailname

or
    
    &lt;script src=&quot;/EmailName.js&quot;&gt;&lt;/script&gt;


Examples
---
    var name = EmailName('frej.norling@example.com');
    // name = 'Frej Norling' 

    var name = EmailName('mårten12_.sÖderBerg12@example.com');
    // name = 'Mårten Söderberg' 
