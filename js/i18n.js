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
    'nav-programs': 'Programs',
    'nav-coaches': 'Coaches',
    'nav-schedule': 'Schedule',
    'nav-booking': 'Book a Class',
    'nav-contact': 'Contact',

    'hero-subtitle': 'Brazilian Jiu-Jitsu',
    'hero-tagline': 'Where chaos meets precision',
    'hero-book': 'Book a Class',

    'about-heading': 'About Our Academy',
    'about-body': 'TROJANS BJJ is a Brazilian Jiu-Jitsu academy in Larnaca, Cyprus, led by certified coaches dedicated to teaching authentic, effective BJJ in a supportive, disciplined environment. We offer classes for adults of all levels, as well as a dedicated kids program starting from age 3, focused on building confidence, discipline and self-defense skills through the art of Jiu-Jitsu.',

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
    'schedule-note': 'Weekly class schedule',
    'day-mon': 'Monday', 'day-tue': 'Tuesday', 'day-wed': 'Wednesday',
    'day-thu': 'Thursday', 'day-fri': 'Friday', 'day-sat': 'Saturday',

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
    'programs-heading': 'Our Programs',
    'program-readmore': 'Read more',

    'program-little-title': 'Little Heroes &mdash; Ages 3&ndash;6',
    'program-little-tagline': 'Where confidence begins through movement.',
    'program-little-body': `
      <p>Little Heroes is a playful and carefully structured introduction to Brazilian Jiu-Jitsu, created specifically for children aged 3&ndash;6. Through age-appropriate games, movement exercises, and fundamental Jiu-Jitsu skills, children develop coordination, balance, agility, body awareness, and essential motor skills while learning how to listen, follow instructions, and interact positively with others.</p>
      <p>At this important stage of development, our goal goes far beyond learning techniques. We create an environment where children learn through movement, build independence, develop focus and discipline, and experience the confidence that comes from overcoming small challenges. Every class is designed to be safe, engaging, positive, and fun, giving our Little Heroes a strong foundation both on and off the mats.</p>
    `,

    'program-junior-title': 'Juniors &mdash; Ages 7&ndash;12',
    'program-junior-tagline': 'Building skill. Developing character. Creating confidence.',
    'program-junior-body': `
      <p>Our Junior Heroes program is designed for one of the most important stages of a child&rsquo;s development. Through structured Brazilian Jiu-Jitsu training, students build a strong technical foundation while developing confidence, discipline, focus, resilience, coordination, and respect.</p>
      <p>As their skills progress, children learn much more than how to perform a technique. They learn how to solve problems under pressure, stay composed when something is difficult, work with different training partners, accept both success and setbacks, and keep working toward a goal. Our coaches challenge each student at an appropriate level, helping them become more capable and confident without losing the enjoyment of training.</p>
      <p>The result is a program that develops strong Jiu-Jitsu and strong individuals &mdash; giving children practical skills, a positive mindset, and lessons they can carry into school, friendships, sport, and everyday life.</p>
    `,

    'program-adult-title': 'Adult Brazilian Jiu-Jitsu',
    'program-adult-tagline': 'Train your body. Challenge your mind. Transform yourself.',
    'program-adult-body': `
      <p>Our Adult Brazilian Jiu-Jitsu program is built for everyone &mdash; from complete beginners stepping onto the mats for the first time to experienced practitioners looking to take their game to the next level.</p>
      <p>Brazilian Jiu-Jitsu is more than a workout. It is a constantly evolving physical and mental challenge that develops strength, mobility, endurance, confidence, problem-solving, and resilience. Every session gives you the opportunity to learn, test yourself, improve, and discover what you are capable of.</p>
      <p>Our academy brings together high-level instruction, structured progression, modern training methods, and an innovative training environment designed to help every student grow. Whether your goal is fitness, self-defence, competition, stress relief, or simply becoming a stronger version of yourself, there is a place for you on our mats.</p>
      <p>We don&rsquo;t just teach Jiu-Jitsu. We use Jiu-Jitsu to transform lives.</p>
    `,

    'program-private-title': 'Private Lessons',
    'program-private-tagline': 'One-on-one coaching, built around you.',
    'program-private-body': `
      <p>Private sessions with Eleftheria or Venizelos, tailored to your goals and your pace. Ideal if you want to accelerate your progress, work on a specific area of your game, or start training in a one-to-one setting before joining group classes.</p>
      <p>They are just as valuable if you are a competitor looking to sharpen your skills. Private lessons are open to every level.</p>
    `,

    'schedule-adults': 'Adults',
    'schedule-kids': 'Kids',

    'p-nogi-am': 'No Gi<br>07:00&ndash;08:00',
    'p-nogi-fund': 'No Gi Fundamentals<br>18:00&ndash;19:00',
    'p-leglocks': 'Leg Locks<br>18:00&ndash;19:00',
    'p-gi': 'Gi<br>18:30&ndash;20:00',
    'p-gi-fund': 'Gi Fundamentals<br>18:30&ndash;20:00',
    'p-nogi-late': 'No Gi<br>19:00&ndash;20:30',
    'p-wrestling': 'Wrestling<br>19:00&ndash;20:30',
    'p-mma': 'Grappling for MMA<br>19:00&ndash;20:30',
    'p-openmat': 'Open Mat<br>11:00&ndash;12:00<br><small>on demand</small>',
    'p-lh-sat': 'Little Heroes 3&ndash;6<br>09:00&ndash;10:00',
    'p-kidsgi-sat': 'Kids Gi 7&ndash;12<br>10:00&ndash;11:00',
    'p-lh-thu': 'Little Heroes 3&ndash;6<br>16:00&ndash;17:00',
    'p-kidsgi': 'Kids Gi 7&ndash;12<br>17:00&ndash;18:00',
    'p-kidsgi-fund': 'Kids Gi Fundamentals<br>17:00&ndash;18:00',
    'p-kidsnogi-fund': 'Kids No Gi Fundamentals<br>17:00&ndash;18:00',
  },

  el: {
    'doc-title': 'TROJANS BJJ | Ακαδημία Brazilian Jiu-Jitsu, Λάρνακα',
    'doc-description': 'TROJANS BJJ - Πιστοποιημένοι προπονητές Brazilian Jiu-Jitsu στη Λάρνακα, Κύπρος. Μαθήματα ενηλίκων και παιδιών, κρατήσεις ιδιαίτερων μαθημάτων.',
    'privacy-doc-title': 'Πολιτική Απορρήτου | TROJANS BJJ',
    'privacy-doc-description': 'Πώς η TROJANS BJJ συλλέγει και χρησιμοποιεί τις πληροφορίες που υποβάλλετε μέσω αυτής της ιστοσελίδας.',

    'nav-toggle-label': 'Εναλλαγή μενού',
    'nav-about': 'Σχετικά',
    'nav-programs': 'Προγράμματα',
    'nav-coaches': 'Προπονητές',
    'nav-schedule': 'Πρόγραμμα',
    'nav-booking': 'Κλείσε Μάθημα',
    'nav-contact': 'Επικοινωνία',

    'hero-subtitle': 'Brazilian Jiu-Jitsu',
    'hero-tagline': 'Εκεί που το χάος συναντά την ακρίβεια',
    'hero-book': 'Κλείσε Μάθημα',

    'about-heading': 'Σχετικά με την Ακαδημία μας',
    'about-body': 'Η TROJANS BJJ είναι μια ακαδημία Brazilian Jiu-Jitsu στη Λάρνακα της Κύπρου, με επικεφαλής πιστοποιημένους προπονητές αφοσιωμένους στη διδασκαλία αυθεντικού και αποτελεσματικού BJJ σε ένα υποστηρικτικό, πειθαρχημένο περιβάλλον. Προσφέρουμε μαθήματα για ενήλικες όλων των επιπέδων, καθώς και ειδικό παιδικό πρόγραμμα από την ηλικία των 3 ετών, με στόχο την ανάπτυξη αυτοπεποίθησης, πειθαρχίας και δεξιοτήτων αυτοάμυνας μέσα από την τέχνη του Jiu-Jitsu.',

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
    'schedule-note': 'Εβδομαδιαίο πρόγραμμα μαθημάτων',
    'day-mon': 'Δευτέρα', 'day-tue': 'Τρίτη', 'day-wed': 'Τετάρτη',
    'day-thu': 'Πέμπτη', 'day-fri': 'Παρασκευή', 'day-sat': 'Σάββατο',

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
    'programs-heading': 'Τα Προγράμματά μας',
    'program-readmore': 'Διαβάστε περισσότερα',

    'program-little-title': 'Little Heroes &mdash; Ηλικίες 3&ndash;6',
    'program-little-tagline': 'Εκεί που ξεκινά η αυτοπεποίθηση, μέσα από την κίνηση.',
    'program-little-body': `
      <p>Το Little Heroes είναι μια παιχνιδιάρικη και προσεκτικά δομημένη εισαγωγή στο Brazilian Jiu-Jitsu, σχεδιασμένη ειδικά για παιδιά ηλικίας 3&ndash;6 ετών. Μέσα από παιχνίδια κατάλληλα για την ηλικία τους, ασκήσεις κίνησης και βασικές δεξιότητες Jiu-Jitsu, τα παιδιά αναπτύσσουν συντονισμό, ισορροπία, ευκινησία, σωματική επίγνωση και βασικές κινητικές δεξιότητες, μαθαίνοντας παράλληλα να ακούν, να ακολουθούν οδηγίες και να αλληλεπιδρούν θετικά με τους άλλους.</p>
      <p>Σε αυτό το σημαντικό στάδιο ανάπτυξης, ο στόχος μας ξεπερνά κατά πολύ την εκμάθηση τεχνικών. Δημιουργούμε ένα περιβάλλον όπου τα παιδιά μαθαίνουν μέσα από την κίνηση, χτίζουν ανεξαρτησία, αναπτύσσουν συγκέντρωση και πειθαρχία και βιώνουν την αυτοπεποίθηση που έρχεται από την υπέρβαση μικρών προκλήσεων. Κάθε μάθημα είναι σχεδιασμένο να είναι ασφαλές, ελκυστικό, θετικό και διασκεδαστικό, δίνοντας στους Little Heroes μας γερά θεμέλια τόσο πάνω στο τατάμι όσο και έξω από αυτό.</p>
    `,

    'program-junior-title': 'Juniors &mdash; Ηλικίες 7&ndash;12',
    'program-junior-tagline': 'Χτίζοντας δεξιότητες. Αναπτύσσοντας χαρακτήρα. Δημιουργώντας αυτοπεποίθηση.',
    'program-junior-body': `
      <p>Το πρόγραμμα Junior Heroes είναι σχεδιασμένο για ένα από τα πιο σημαντικά στάδια ανάπτυξης ενός παιδιού. Μέσα από δομημένη προπόνηση Brazilian Jiu-Jitsu, οι μαθητές χτίζουν γερές τεχνικές βάσεις, αναπτύσσοντας παράλληλα αυτοπεποίθηση, πειθαρχία, συγκέντρωση, ανθεκτικότητα, συντονισμό και σεβασμό.</p>
      <p>Καθώς οι δεξιότητές τους εξελίσσονται, τα παιδιά μαθαίνουν πολλά περισσότερα από το πώς να εκτελούν μια τεχνική. Μαθαίνουν να λύνουν προβλήματα υπό πίεση, να παραμένουν ψύχραιμα όταν κάτι είναι δύσκολο, να συνεργάζονται με διαφορετικούς συμπαίκτες, να αποδέχονται τόσο τις επιτυχίες όσο και τις αποτυχίες, και να συνεχίζουν να εργάζονται για έναν στόχο. Οι προπονητές μας προκαλούν κάθε μαθητή στο κατάλληλο επίπεδο, βοηθώντας τον να γίνει πιο ικανός και σίγουρος χωρίς να χάνει τη χαρά της προπόνησης.</p>
      <p>Το αποτέλεσμα είναι ένα πρόγραμμα που αναπτύσσει δυνατό Jiu-Jitsu και δυνατούς ανθρώπους &mdash; δίνοντας στα παιδιά πρακτικές δεξιότητες, θετική νοοτροπία και μαθήματα που παίρνουν μαζί τους στο σχολείο, στις φιλίες, στον αθλητισμό και στην καθημερινή ζωή.</p>
    `,

    'program-adult-title': 'Brazilian Jiu-Jitsu Ενηλίκων',
    'program-adult-tagline': 'Γύμνασε το σώμα σου. Πρόκλησε το μυαλό σου. Μεταμόρφωσε τον εαυτό σου.',
    'program-adult-body': `
      <p>Το πρόγραμμα Brazilian Jiu-Jitsu Ενηλίκων είναι φτιαγμένο για όλους &mdash; από απόλυτα αρχάριους που πατούν για πρώτη φορά στο τατάμι, έως έμπειρους αθλητές που θέλουν να ανεβάσουν το επίπεδό τους.</p>
      <p>Το Brazilian Jiu-Jitsu είναι κάτι περισσότερο από απλή προπόνηση. Είναι μια διαρκώς εξελισσόμενη σωματική και πνευματική πρόκληση που αναπτύσσει δύναμη, κινητικότητα, αντοχή, αυτοπεποίθηση, ικανότητα επίλυσης προβλημάτων και ανθεκτικότητα. Κάθε προπόνηση σού δίνει την ευκαιρία να μάθεις, να δοκιμαστείς, να βελτιωθείς και να ανακαλύψεις τι μπορείς να καταφέρεις.</p>
      <p>Η ακαδημία μας συνδυάζει υψηλού επιπέδου διδασκαλία, δομημένη εξέλιξη, σύγχρονες μεθόδους προπόνησης και ένα καινοτόμο περιβάλλον σχεδιασμένο να βοηθά κάθε μαθητή να αναπτυχθεί. Είτε ο στόχος σου είναι η φυσική κατάσταση, η αυτοάμυνα, ο αγωνιστικός αθλητισμός, η αποφόρτιση από το άγχος, είτε απλώς να γίνεις μια δυνατότερη εκδοχή του εαυτού σου, υπάρχει θέση για σένα στο τατάμι μας.</p>
      <p>Δεν διδάσκουμε απλώς Jiu-Jitsu. Χρησιμοποιούμε το Jiu-Jitsu για να μεταμορφώνουμε ζωές.</p>
    `,

    'program-private-title': 'Ιδιαίτερα Μαθήματα',
    'program-private-tagline': 'Προσωπική προπόνηση, φτιαγμένη για εσένα.',
    'program-private-body': `
      <p>Ιδιαίτερα μαθήματα με την Eleftheria ή τον Venizelos, προσαρμοσμένα στους στόχους και τον ρυθμό σου. Ιδανικά αν θέλεις να επιταχύνεις την πρόοδό σου, να δουλέψεις σε ένα συγκεκριμένο κομμάτι του παιχνιδιού σου, ή να ξεκινήσεις προπόνηση σε προσωπικό περιβάλλον πριν ενταχθείς στα ομαδικά μαθήματα.</p>
      <p>Είναι εξίσου πολύτιμα αν είσαι αγωνιστής και θέλεις να τελειοποιήσεις τις ικανότητές σου. Τα ιδιαίτερα μαθήματα απευθύνονται σε όλα τα επίπεδα.</p>
    `,

    'schedule-adults': 'Ενήλικες',
    'schedule-kids': 'Παιδικά',

    'p-nogi-am': 'No Gi<br>07:00&ndash;08:00',
    'p-nogi-fund': 'No Gi Fundamentals<br>18:00&ndash;19:00',
    'p-leglocks': 'Leg Locks<br>18:00&ndash;19:00',
    'p-gi': 'Gi<br>18:30&ndash;20:00',
    'p-gi-fund': 'Gi Fundamentals<br>18:30&ndash;20:00',
    'p-nogi-late': 'No Gi<br>19:00&ndash;20:30',
    'p-wrestling': 'Πάλη<br>19:00&ndash;20:30',
    'p-mma': 'Grappling για MMA<br>19:00&ndash;20:30',
    'p-openmat': 'Open Mat<br>11:00&ndash;12:00<br><small>κατόπιν ζήτησης</small>',
    'p-lh-sat': 'Little Heroes 3&ndash;6<br>09:00&ndash;10:00',
    'p-kidsgi-sat': 'Παιδικό Gi 7&ndash;12<br>10:00&ndash;11:00',
    'p-lh-thu': 'Little Heroes 3&ndash;6<br>16:00&ndash;17:00',
    'p-kidsgi': 'Παιδικό Gi 7&ndash;12<br>17:00&ndash;18:00',
    'p-kidsgi-fund': 'Παιδικό Gi Fundamentals<br>17:00&ndash;18:00',
    'p-kidsnogi-fund': 'Παιδικό No Gi Fundamentals<br>17:00&ndash;18:00',
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
