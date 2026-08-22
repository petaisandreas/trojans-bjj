// EN/EL translations for the whole site (index.html + privacy.html).
// Person names are kept in Latin script in both languages - guessing a
// specific Greek spelling of someone's name risks getting it wrong, and
// mixing a Latin name into a Greek sentence is completely normal in
// everyday Cypriot usage.
//
// Elements carry a data-i18n="key" attribute; this file supplies the
// innerHTML for that key in each language. data-i18n-placeholder,
// data-i18n-aria-label and data-i18n-title work the same way for
// attributes instead of content.

const TRANSLATIONS = {
  en: {
    'doc-title': 'TROJANS BJJ | Brazilian Jiu-Jitsu Academy, Larnaca',
    'doc-description': 'TROJANS BJJ - Certified Brazilian Jiu-Jitsu coaches in Larnaca, Cyprus. Adult and kids classes, private lessons booking.',
    'privacy-doc-title': 'Privacy Policy | TROJANS BJJ',
    'privacy-doc-description': 'How TROJANS BJJ collects and uses the information you submit through this website.',

    'nav-toggle-label': 'Toggle menu',
    'nav-about': 'About',
    'nav-coaches': 'Coaches',
    'nav-schedule': 'Schedule',
    'nav-booking': 'Book a Class',
    'nav-contact': 'Contact',

    'hero-subtitle': 'Brazilian Jiu-Jitsu',
    'hero-tagline': 'Where chaos meets precision',
    'hero-book': 'Book a Class',

    'about-heading': 'About Our Academy',
    'about-body': 'TROJANS BJJ is a Brazilian Jiu-Jitsu academy in Larnaca, Cyprus, led by certified coaches dedicated to teaching authentic, effective BJJ in a supportive, disciplined environment. We offer classes for adults of all levels, as well as a dedicated kids program starting from age 3, focused on building confidence, discipline and self-defense skills through the art of Jiu-Jitsu.',
    'about-card1-title': 'Adults &mdash; All Levels',
    'about-card1-body': 'From complete beginners to competitors, our adult classes cover fundamentals, technique, drilling and live rolling.',
    'about-card2-title': 'Kids Program (3yo+)',
    'about-card2-body': 'A fun, structured program that builds coordination, confidence and discipline for young athletes.',
    'about-card3-title': 'Private Lessons',
    'about-card3-body': 'One-on-one coaching with Eleftheria or Venizelos, tailored to your goals and pace.',

    'coaches-heading': 'Our Coaches',
    'achievements-heading': 'Achievements',

    'role-eleftheria': 'Certified Black Belt',
    'role-venizelos': 'Certified Black Belt',
    'role-louis': 'Certified Black Belt',
    'role-orestis': 'Wrestling Coach',

    'meet-eleftheria': 'Meet Eleftheria',
    'meet-venizelos': 'Meet Venizelos',
    'meet-louis': 'Meet Louis',
    'meet-orestis': 'Meet Orestis',

    'achievements-eleftheria': `
      <li>ADCC Veteran &amp; ADCC European Trials Champion</li>
      <li>IBJJF European Champion &mdash; Weight and Absolute</li>
      <li>IBJJF Pan Champion</li>
      <li>JJIF World Champion</li>
      <li>Founder of <a href="https://www.goldencamppro.com" target="_blank" rel="noopener">GoldenCampPro.com</a></li>
    `,
    'achievements-venizelos': `
      <li>JJIF European No-Gi Vice Champion 2025</li>
      <li>JJIF European No-Gi Vice Champion 2024</li>
      <li>Cyprus National Champion</li>
      <li>Greece National Champion</li>
    `,
    'achievements-louis': `
      <li>MMA fighter and Coach</li>
    `,
    'achievements-orestis': `
      <li>Member of the Greek National Wrestling Team, 1997&ndash;2009</li>
      <li>3rd place &mdash; Mediterranean Games 2009, 96&nbsp;kg</li>
      <li>1st place &mdash; Panhellenic Games 2008, 96&nbsp;kg</li>
      <li>1st place &mdash; Panhellenic Championship 2007, 96&nbsp;kg</li>
      <li>3rd place &mdash; Balkan Games 2000 (Juniors), 85&nbsp;kg</li>
    `,

    'schedule-heading': 'Class Schedule',
    'schedule-note': 'Brazilian Jiu Jitsu Schedule 2025&ndash;26',
    'day-mon': 'Monday', 'day-tue': 'Tuesday', 'day-wed': 'Wednesday',
    'day-thu': 'Thursday', 'day-fri': 'Friday', 'day-sat': 'Saturday',

    'pill-nogi-0708': 'No Gi<br>7&ndash;8',
    'pill-kids35-0910': 'Kids 3&ndash;5<br>9&ndash;10',
    'pill-openmat': 'Open Mat<br>10 AM',
    'pill-kids57-1617': 'Kids 5&ndash;7<br>16:00&ndash;17:00',
    'pill-kids812-1718': 'Kids 8&ndash;12<br>17:00&ndash;18:00',
    'pill-kids35-1718': 'Kids 3&ndash;5<br>17:00&ndash;18:00',
    'pill-kidsmixed-1718': 'Kids Mixed<br>17:00&ndash;18:00',
    'pill-gi-1830-2000': 'Gi<br>18:30&ndash;20:00',
    'pill-beginners-1800-1900': 'Beginners No Gi<br>18:00&ndash;19:00',
    'pill-nogi-1900-2030': 'No Gi<br>19:00&ndash;20:30',
    'pill-wrestling-1900-2030': 'Wrestling<br>19:00&ndash;20:30',

    'booking-heading': 'Book a Class',
    'booking-intro': 'Fill in the form below to request a spot in a group class or a private lesson. Submitting sends your request straight to us on WhatsApp so we can confirm availability.',
    'label-name': 'Full Name',
    'label-phone': 'Phone Number',
    'label-session-type': 'Session Type',
    'option-select': 'Select an option&hellip;',
    'option-group-trial': 'Group Class (Trial)',
    'option-kids-trial': 'Kids Class (Trial)',
    'option-private-eleftheria': 'Private Class &mdash; Eleftheria',
    'option-private-venizelos': 'Private Class &mdash; Venizelos',
    'trial-hint': 'Trial classes are for first-timers only &mdash; one per person.',
    'label-payment': 'Payment Method',
    'option-revolut': 'Revolut',
    'revolut-hint': 'We&rsquo;ll send you our Revolut details on WhatsApp when we confirm your booking.',
    'label-date': 'Preferred Date',
    'label-time': 'Preferred Time',
    'label-message': 'Message (optional)',
    'message-placeholder': 'Anything we should know? Experience level, goals, etc.',
    'consent-text': 'I have read and accept the <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a>, and consent to TROJANS BJJ using the details above to contact me about this booking.',
    'submit-booking': 'Send Booking Request via WhatsApp',
    'booking-alt': 'Prefer another way? Call/WhatsApp us directly at <a href="https://wa.me/35797605817">+357 97 605817</a>.',

    'contact-heading': 'Visit Us',
    'label-location': 'Location:',
    'location-note': 'Larnaca, Cyprus &mdash; tap the address for directions',
    'label-phone-contact': 'Phone / WhatsApp:',
    'label-instagram': 'Instagram:',
    'label-payments': 'Payments:',
    'payments-value': 'Revolut',
    'map-title': 'Map showing TROJANS BJJ in Aradippou, Larnaca',

    'footer-rights': 'All rights reserved.',
    'footer-privacy': 'Privacy Policy',

    'privacy-heading': 'Privacy Policy',
    'privacy-updated': 'Last updated: 10 August 2026',
    'privacy-intro': 'This policy explains what personal information TROJANS BJJ collects through this website, why we collect it, and what rights you have over it. It applies only to this website.',
    'privacy-who-heading': 'Who we are',
    'privacy-who-body': 'TROJANS BJJ is a Brazilian Jiu-Jitsu academy based in Larnaca, Cyprus. For anything relating to your personal data, contact us on WhatsApp at <a href="https://wa.me/35797605817">+357 97 605817</a>.',
    'privacy-collect-heading': 'What we collect',
    'privacy-collect-body': 'We only collect what you type into the booking form yourself. Nothing is gathered in the background, and this site sets no cookies of its own.',
    'privacy-collect-list': `
      <li>Your name and phone number</li>
      <li>The session type you selected</li>
      <li>Your chosen payment method</li>
      <li>Your preferred date and time, if you give them</li>
      <li>Any optional message you write</li>
    `,
    'privacy-reaches-heading': 'How your booking reaches us',
    'privacy-reaches-body': 'This website has no database and no server that stores your details. When you submit the booking form, your browser opens WhatsApp with those details written into a message addressed to us. Nothing is sent until you press send in WhatsApp, and you can edit or discard the message first. Once sent, the message sits in our WhatsApp chat history and is handled by WhatsApp under its own privacy policy.',
    'privacy-why-heading': 'Why we use it',
    'privacy-why-body': 'Solely to respond to your booking request &mdash; confirming availability, arranging your class and answering your questions. We do not use your details for marketing, and we do not sell or share them with anyone for their own purposes.',
    'privacy-keep-heading': 'How long we keep it',
    'privacy-keep-body': 'Your booking message stays in our WhatsApp chat history until we delete it. You can ask us to delete it at any time and we will do so.',
    'privacy-thirdparty-heading': 'Other services this site uses',
    'privacy-thirdparty-body': 'A few third-party services are involved in delivering this page. Each receives your IP address as a normal part of serving content, and each has its own privacy policy:',
    'privacy-thirdparty-list': `
      <li><strong>GitHub Pages</strong> &mdash; hosts this website</li>
      <li><strong>Google Fonts</strong> &mdash; supplies the typefaces used here</li>
      <li><strong>Google Maps</strong> &mdash; provides the embedded map in the contact section</li>
      <li><strong>WhatsApp (Meta)</strong> &mdash; carries your booking message to us</li>
    `,
    'privacy-rights-heading': 'Your rights',
    'privacy-rights-body': 'Under the GDPR you can ask us to show you the personal data we hold about you, correct it, delete it, or restrict how we use it. You can also withdraw your consent at any time. Message us on the number above and we will action it. If you believe we have mishandled your data, you may complain to the Office of the Commissioner for Personal Data Protection in Cyprus.',
    'privacy-children-heading': 'Children',
    'privacy-children-body': 'Our kids classes are booked by a parent or guardian. If you are booking for a child, please submit the form yourself rather than having the child do it.',
    'privacy-changes-heading': 'Changes to this policy',
    'privacy-changes-body': 'If this policy changes, the revised version will appear on this page with a new date at the top.',
    'privacy-back': '&larr; Back to the site',
  },

  el: {
    'doc-title': 'TROJANS BJJ | Ακαδημία Brazilian Jiu-Jitsu, Λάρνακα',
    'doc-description': 'TROJANS BJJ - Πιστοποιημένοι προπονητές Brazilian Jiu-Jitsu στη Λάρνακα, Κύπρος. Μαθήματα ενηλίκων και παιδιών, κρατήσεις ιδιαίτερων μαθημάτων.',
    'privacy-doc-title': 'Πολιτική Απορρήτου | TROJANS BJJ',
    'privacy-doc-description': 'Πώς η TROJANS BJJ συλλέγει και χρησιμοποιεί τις πληροφορίες που υποβάλλετε μέσω αυτής της ιστοσελίδας.',

    'nav-toggle-label': 'Εναλλαγή μενού',
    'nav-about': 'Σχετικά',
    'nav-coaches': 'Προπονητές',
    'nav-schedule': 'Πρόγραμμα',
    'nav-booking': 'Κλείσε Μάθημα',
    'nav-contact': 'Επικοινωνία',

    'hero-subtitle': 'Brazilian Jiu-Jitsu',
    'hero-tagline': 'Εκεί που το χάος συναντά την ακρίβεια',
    'hero-book': 'Κλείσε Μάθημα',

    'about-heading': 'Σχετικά με την Ακαδημία μας',
    'about-body': 'Η TROJANS BJJ είναι μια ακαδημία Brazilian Jiu-Jitsu στη Λάρνακα της Κύπρου, με επικεφαλής πιστοποιημένους προπονητές αφοσιωμένους στη διδασκαλία αυθεντικού και αποτελεσματικού BJJ σε ένα υποστηρικτικό, πειθαρχημένο περιβάλλον. Προσφέρουμε μαθήματα για ενήλικες όλων των επιπέδων, καθώς και ειδικό παιδικό πρόγραμμα από την ηλικία των 3 ετών, με στόχο την ανάπτυξη αυτοπεποίθησης, πειθαρχίας και δεξιοτήτων αυτοάμυνας μέσα από την τέχνη του Jiu-Jitsu.',
    'about-card1-title': 'Ενήλικες &mdash; Όλα τα Επίπεδα',
    'about-card1-body': 'Από απόλυτους αρχάριους έως αγωνιστές, τα μαθήματα ενηλίκων καλύπτουν βασικές αρχές, τεχνική, εξάσκηση και ελεύθερη πάλη (rolling).',
    'about-card2-title': 'Παιδικό Πρόγραμμα (3+ ετών)',
    'about-card2-body': 'Ένα διασκεδαστικό, δομημένο πρόγραμμα που καλλιεργεί συντονισμό, αυτοπεποίθηση και πειθαρχία στους μικρούς αθλητές.',
    'about-card3-title': 'Ιδιαίτερα Μαθήματα',
    'about-card3-body': 'Προσωπική προπόνηση με την Eleftheria ή τον Venizelos, προσαρμοσμένη στους στόχους και τον ρυθμό σας.',

    'coaches-heading': 'Οι Προπονητές μας',
    'achievements-heading': 'Διακρίσεις',

    'role-eleftheria': 'Πιστοποιημένη Μαύρη Ζώνη',
    'role-venizelos': 'Πιστοποιημένη Μαύρη Ζώνη',
    'role-louis': 'Πιστοποιημένη Μαύρη Ζώνη',
    'role-orestis': 'Προπονητής Πάλης',

    'meet-eleftheria': 'Γνωρίστε την Eleftheria',
    'meet-venizelos': 'Γνωρίστε τον Venizelos',
    'meet-louis': 'Γνωρίστε τον Louis',
    'meet-orestis': 'Γνωρίστε τον Orestis',

    'achievements-eleftheria': `
      <li>Βετεράνος ADCC &amp; Πρωταθλήτρια Ευρωπαϊκών Προκριματικών ADCC</li>
      <li>Πρωταθλήτρια Ευρώπης IBJJF &mdash; Βάρος και Απόλυτη Κατηγορία</li>
      <li>Πρωταθλήτρια IBJJF Pan</li>
      <li>Παγκόσμια Πρωταθλήτρια JJIF</li>
      <li>Ιδρύτρια του <a href="https://www.goldencamppro.com" target="_blank" rel="noopener">GoldenCampPro.com</a></li>
    `,
    'achievements-venizelos': `
      <li>Αντιπρωταθλητής Ευρώπης JJIF No-Gi 2025</li>
      <li>Αντιπρωταθλητής Ευρώπης JJIF No-Gi 2024</li>
      <li>Πρωταθλητής Κύπρου</li>
      <li>Πρωταθλητής Ελλάδας</li>
    `,
    'achievements-louis': `
      <li>Αθλητής και Προπονητής MMA</li>
    `,
    'achievements-orestis': `
      <li>Μέλος της Εθνικής Ομάδας Πάλης της Ελλάδας, 1997&ndash;2009</li>
      <li>3η θέση &mdash; Μεσογειακοί Αγώνες 2009, 96&nbsp;κιλά</li>
      <li>1η θέση &mdash; Πανελλήνιοι Αγώνες 2008, 96&nbsp;κιλά</li>
      <li>1η θέση &mdash; Πανελλήνιο Πρωτάθλημα 2007, 96&nbsp;κιλά</li>
      <li>3η θέση &mdash; Βαλκανικοί Αγώνες 2000 (Έφηβοι), 85&nbsp;κιλά</li>
    `,

    'schedule-heading': 'Πρόγραμμα Μαθημάτων',
    'schedule-note': 'Πρόγραμμα Brazilian Jiu-Jitsu 2025&ndash;26',
    'day-mon': 'Δευτέρα', 'day-tue': 'Τρίτη', 'day-wed': 'Τετάρτη',
    'day-thu': 'Πέμπτη', 'day-fri': 'Παρασκευή', 'day-sat': 'Σάββατο',

    'pill-nogi-0708': 'No Gi<br>7&ndash;8',
    'pill-kids35-0910': 'Παιδικό 3&ndash;5<br>9&ndash;10',
    'pill-openmat': 'Open Mat<br>10 πμ',
    'pill-kids57-1617': 'Παιδικό 5&ndash;7<br>16:00&ndash;17:00',
    'pill-kids812-1718': 'Παιδικό 8&ndash;12<br>17:00&ndash;18:00',
    'pill-kids35-1718': 'Παιδικό 3&ndash;5<br>17:00&ndash;18:00',
    'pill-kidsmixed-1718': 'Παιδικό Μικτό<br>17:00&ndash;18:00',
    'pill-gi-1830-2000': 'Gi<br>18:30&ndash;20:00',
    'pill-beginners-1800-1900': 'Αρχάριοι No Gi<br>18:00&ndash;19:00',
    'pill-nogi-1900-2030': 'No Gi<br>19:00&ndash;20:30',
    'pill-wrestling-1900-2030': 'Πάλη<br>19:00&ndash;20:30',

    'booking-heading': 'Κλείσε Μάθημα',
    'booking-intro': 'Συμπληρώστε τη φόρμα παρακάτω για να ζητήσετε θέση σε ομαδικό ή ιδιαίτερο μάθημα. Η υποβολή στέλνει το αίτημά σας απευθείας σε εμάς μέσω WhatsApp, ώστε να επιβεβαιώσουμε τη διαθεσιμότητα.',
    'label-name': 'Ονοματεπώνυμο',
    'label-phone': 'Αριθμός Τηλεφώνου',
    'label-session-type': 'Τύπος Μαθήματος',
    'option-select': 'Επιλέξτε&hellip;',
    'option-group-trial': 'Ομαδικό Μάθημα (Δοκιμαστικό)',
    'option-kids-trial': 'Παιδικό Μάθημα (Δοκιμαστικό)',
    'option-private-eleftheria': 'Ιδιαίτερο Μάθημα &mdash; Eleftheria',
    'option-private-venizelos': 'Ιδιαίτερο Μάθημα &mdash; Venizelos',
    'trial-hint': 'Τα δοκιμαστικά μαθήματα είναι μόνο για όσους έρχονται για πρώτη φορά &mdash; ένα ανά άτομο.',
    'label-payment': 'Τρόπος Πληρωμής',
    'option-revolut': 'Revolut',
    'revolut-hint': 'Θα σας στείλουμε τα στοιχεία μας στο Revolut μέσω WhatsApp μόλις επιβεβαιώσουμε την κράτησή σας.',
    'label-date': 'Προτιμώμενη Ημερομηνία',
    'label-time': 'Προτιμώμενη Ώρα',
    'label-message': 'Μήνυμα (προαιρετικό)',
    'message-placeholder': 'Κάτι που πρέπει να γνωρίζουμε; Επίπεδο εμπειρίας, στόχοι, κ.λπ.',
    'consent-text': 'Έχω διαβάσει και αποδέχομαι την <a href="privacy.html" target="_blank" rel="noopener">Πολιτική Απορρήτου</a> και συναινώ η TROJANS BJJ να χρησιμοποιήσει τα παραπάνω στοιχεία για να επικοινωνήσει μαζί μου σχετικά με αυτή την κράτηση.',
    'submit-booking': 'Αποστολή Αιτήματος Κράτησης μέσω WhatsApp',
    'booking-alt': 'Προτιμάτε άλλο τρόπο; Καλέστε μας ή στείλτε μας WhatsApp απευθείας στο <a href="https://wa.me/35797605817">+357 97 605817</a>.',

    'contact-heading': 'Επισκεφθείτε μας',
    'label-location': 'Τοποθεσία:',
    'location-note': 'Λάρνακα, Κύπρος &mdash; πατήστε στη διεύθυνση για οδηγίες',
    'label-phone-contact': 'Τηλέφωνο / WhatsApp:',
    'label-instagram': 'Instagram:',
    'label-payments': 'Πληρωμές:',
    'payments-value': 'Revolut',
    'map-title': 'Χάρτης με την τοποθεσία της TROJANS BJJ στην Αραδίππου, Λάρνακα',

    'footer-rights': 'Με επιφύλαξη παντός δικαιώματος.',
    'footer-privacy': 'Πολιτική Απορρήτου',

    'privacy-heading': 'Πολιτική Απορρήτου',
    'privacy-updated': 'Τελευταία ενημέρωση: 10 Αυγούστου 2026',
    'privacy-intro': 'Αυτή η πολιτική εξηγεί ποια προσωπικά δεδομένα συλλέγει η TROJANS BJJ μέσω αυτής της ιστοσελίδας, γιατί τα συλλέγει και ποια δικαιώματα έχετε σχετικά με αυτά. Ισχύει μόνο για αυτή την ιστοσελίδα.',
    'privacy-who-heading': 'Ποιοι είμαστε',
    'privacy-who-body': 'Η TROJANS BJJ είναι μια ακαδημία Brazilian Jiu-Jitsu με έδρα τη Λάρνακα, Κύπρος. Για οτιδήποτε σχετικό με τα προσωπικά σας δεδομένα, επικοινωνήστε μαζί μας στο WhatsApp στο <a href="https://wa.me/35797605817">+357 97 605817</a>.',
    'privacy-collect-heading': 'Τι συλλέγουμε',
    'privacy-collect-body': 'Συλλέγουμε μόνο ό,τι πληκτρολογείτε εσείς οι ίδιοι στη φόρμα κράτησης. Τίποτα δεν συλλέγεται στο παρασκήνιο, και αυτή η ιστοσελίδα δεν χρησιμοποιεί δικά της cookies.',
    'privacy-collect-list': `
      <li>Το όνομα και τον αριθμό τηλεφώνου σας</li>
      <li>Τον τύπο μαθήματος που επιλέξατε</li>
      <li>Τον τρόπο πληρωμής που επιλέξατε</li>
      <li>Την προτιμώμενη ημερομηνία και ώρα, εφόσον τις δώσετε</li>
      <li>Οποιοδήποτε προαιρετικό μήνυμα γράψετε</li>
    `,
    'privacy-reaches-heading': 'Πώς φτάνει η κράτησή σας σε εμάς',
    'privacy-reaches-body': 'Αυτή η ιστοσελίδα δεν διαθέτει βάση δεδομένων ούτε διακομιστή που αποθηκεύει τα στοιχεία σας. Όταν υποβάλλετε τη φόρμα κράτησης, το πρόγραμμα περιήγησής σας ανοίγει το WhatsApp με τα στοιχεία αυτά γραμμένα σε ένα μήνυμα προς εμάς. Τίποτα δεν αποστέλλεται μέχρι να πατήσετε αποστολή στο WhatsApp, και μπορείτε να επεξεργαστείτε ή να διαγράψετε το μήνυμα πριν από αυτό. Μόλις σταλεί, το μήνυμα παραμένει στο ιστορικό συνομιλιών μας στο WhatsApp και διαχειρίζεται σύμφωνα με τη δική του πολιτική απορρήτου.',
    'privacy-why-heading': 'Γιατί το χρησιμοποιούμε',
    'privacy-why-body': 'Αποκλειστικά για να ανταποκριθούμε στο αίτημα κράτησής σας &mdash; επιβεβαιώνοντας διαθεσιμότητα, οργανώνοντας το μάθημά σας και απαντώντας στις ερωτήσεις σας. Δεν χρησιμοποιούμε τα στοιχεία σας για μάρκετινγκ, και δεν τα πουλάμε ούτε τα μοιραζόμαστε με κανέναν για δικούς του σκοπούς.',
    'privacy-keep-heading': 'Για πόσο χρόνο τα διατηρούμε',
    'privacy-keep-body': 'Το μήνυμα κράτησής σας παραμένει στο ιστορικό συνομιλιών μας στο WhatsApp μέχρι να το διαγράψουμε. Μπορείτε να μας ζητήσετε να το διαγράψουμε ανά πάσα στιγμή και θα το κάνουμε.',
    'privacy-thirdparty-heading': 'Άλλες υπηρεσίες που χρησιμοποιεί αυτή η ιστοσελίδα',
    'privacy-thirdparty-body': 'Ορισμένες υπηρεσίες τρίτων εμπλέκονται στην παροχή αυτής της σελίδας. Καθεμία λαμβάνει τη διεύθυνση IP σας ως φυσιολογικό μέρος της παροχής περιεχομένου, και καθεμία έχει τη δική της πολιτική απορρήτου:',
    'privacy-thirdparty-list': `
      <li><strong>GitHub Pages</strong> &mdash; φιλοξενεί αυτή την ιστοσελίδα</li>
      <li><strong>Google Fonts</strong> &mdash; παρέχει τις γραμματοσειρές που χρησιμοποιούνται εδώ</li>
      <li><strong>Google Maps</strong> &mdash; παρέχει τον ενσωματωμένο χάρτη στην ενότητα επικοινωνίας</li>
      <li><strong>WhatsApp (Meta)</strong> &mdash; μεταφέρει το μήνυμα κράτησής σας σε εμάς</li>
    `,
    'privacy-rights-heading': 'Τα δικαιώματά σας',
    'privacy-rights-body': 'Σύμφωνα με τον ΓΚΠΔ (GDPR), μπορείτε να μας ζητήσετε να σας δείξουμε τα προσωπικά δεδομένα που διατηρούμε για εσάς, να τα διορθώσουμε, να τα διαγράψουμε ή να περιορίσουμε τη χρήση τους. Μπορείτε επίσης να ανακαλέσετε τη συγκατάθεσή σας ανά πάσα στιγμή. Στείλτε μας μήνυμα στον παραπάνω αριθμό και θα το διεκπεραιώσουμε. Εάν πιστεύετε ότι χειριστήκαμε λανθασμένα τα δεδομένα σας, μπορείτε να υποβάλετε καταγγελία στο Γραφείο του Επιτρόπου Προστασίας Δεδομένων Προσωπικού Χαρακτήρα της Κύπρου.',
    'privacy-children-heading': 'Παιδιά',
    'privacy-children-body': 'Τα παιδικά μας μαθήματα κλείνονται από γονέα ή κηδεμόνα. Εάν κάνετε κράτηση για παιδί, παρακαλούμε υποβάλετε τη φόρμα εσείς οι ίδιοι αντί να το κάνει το παιδί.',
    'privacy-changes-heading': 'Αλλαγές σε αυτή την πολιτική',
    'privacy-changes-body': 'Εάν αυτή η πολιτική αλλάξει, η αναθεωρημένη έκδοση θα εμφανιστεί σε αυτή τη σελίδα με νέα ημερομηνία στην κορυφή.',
    'privacy-back': '&larr; Επιστροφή στην ιστοσελίδα',
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const html = TRANSLATIONS[lang][el.dataset.i18n];
    if (html !== undefined) el.innerHTML = html;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = TRANSLATIONS[lang][el.dataset.i18nPlaceholder];
    if (text !== undefined) el.setAttribute('placeholder', text);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const text = TRANSLATIONS[lang][el.dataset.i18nAriaLabel];
    if (text !== undefined) el.setAttribute('aria-label', text);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const text = TRANSLATIONS[lang][el.dataset.i18nTitle];
    if (text !== undefined) el.setAttribute('title', text);
  });

  const titleKey = document.body.dataset.i18nDocTitle;
  if (titleKey && TRANSLATIONS[lang][titleKey]) {
    document.title = TRANSLATIONS[lang][titleKey];
  }
  const descKey = document.body.dataset.i18nDocDescription;
  const descTag = document.querySelector('meta[name="description"]');
  if (descKey && descTag && TRANSLATIONS[lang][descKey]) {
    descTag.setAttribute('content', TRANSLATIONS[lang][descKey]);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  localStorage.setItem('trojans-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('trojans-lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
});
