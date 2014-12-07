EmailName
=========

Extract perfectly formated names from emails even from UTF-8 emails.

Demo
---
http://frejnorling.github.io/EmailName

Install
---
    npm install emailname

    bower install emailname

Include as a script

    <script src="emailname.js"></script>


Examples
---
    var name = EmailName('frej.norling@example.com');
    // name = 'Frej Norling' 

    var name = EmailName('mårten12_.sÖderBerg12@example.com');
    // name = 'Mårten Söderberg' 
    
    
Authors
---
Code: [FrejNorling](https://github.com/frejnorling)

License
---
The MIT license (Refer to the [LICENSE.md](https://github.com/frejnorling/EmailName/blob/master/LICENSE) file)
