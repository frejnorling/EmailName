EmailName
=========

Extract perfectly formated names from emails even from UTF-8 emails.

Examples
---
    var name = EmailName('frej.norling@example.com');
    // name = 'Frej Norling' 

    var name = EmailName('mårten12_.sÖderBerg12@example.com');
    // name = 'Mårten Söderberg' 
