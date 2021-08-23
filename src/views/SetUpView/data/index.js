import { colors } from '@material-ui/core';
export const faq = {
  account: {

    subtitle: '',
    icon: ' fas fa-hourglass-start ',
    color: colors.amber,
    items: [
      {
        title: 'Az új európai uniós szabályok miatt szükséges megadni néhány fontosabb adatot. Az első oldalon az email címedet és a telefonszámodat kell megadni',
        updated: '1.1',
      },
      {
        title: 'Add meg a 6 számjegyű kódot amit a telefondra küldtünk, SMS-ben',
        updated: '1.2',
      },
      {
        title: 'Vállalkozás ismertetése. Itt az ország opciónál meg kell adni, hogy Magyarország és a vállalkozás jellegénél pedig meg kell keresni azt az opciót amelyik rád illik, ez általában az  adószemélyes magánszemély opció lesz ',
        updated: '1.3',
      },
      {
        title: 'A negyedik oldalon a saját személyes adataid kell megadni',
        updated: '1.4',
      },
      {
        title: ' A vállalkozás webhelyére írd be, hogy: www.flipit.store. Ha egyéb adatot kér tőled a Stripe a vállalkozás adatainál akkor keresd meg azt amid rád illik, ha nem találsz semmit akkor kezd el beírni, hogy egyéb kereskedelem, és válaszd ki a feldobott opciót',
        updated: '1.5',
      },
      {
        title: 'Add meg annak a bankszámlaszámnak az IBAN számát ahová szeretnéd, hogy utaljuk neked a pénzt miután eladtál valamit. Az IBAN számod a bankszámlaszámod nemzetközi változata ami ugyanaz mint a bankszámlaszámod csak banktól eltérően az elejére kell írni a bankod kódját. Ha nem tudod az IBAN számodat akkor csupán Google-ba írd be, hogy pl. "OTP bank IBAN számom " ',
        updated: '1.6',
      },
      {
        title: 'Hiányzó adatok kitöltése. Ha látsz egy piros négyzetet ezzel a szöveggel: "Hiányoznak egyes kötelezően megadandó adatok" akkor kattins a mellette lévő frissítés gombra. Ezután töltsd fel a szükséges adatokat. Ezt nem mindenkinél kéri a Stripe egyből.',
        updated: '1.7',
      },
      {
        title: 'Az utolsó dolog az adatok ellenőrzése. Miután ellenőrizted az adataidat nyomj a küldés gombra. Ezután már el fogsz tudni adni tárgyakat',
        updated: '1.8',
      },
      {
        title: 'Ha nem adod meg az összes megfelelő adatot akkor az oldal ki fog léptetni. Ezután újra be kell jelentkezned és meg kell adnod az összes kötelező adatot, ahhoz, hogy eladó lehess',
        updated: '1.9',
      },
    ],
  },

};
