wkhtmltopdf --print-media-type -O landscape 'http://127.0.0.1:8000/#/thursday_schedule' 'assets/schedule-thursday.pdf';
wkhtmltopdf --print-media-type -O landscape 'http://127.0.0.1:8000/#/friday_schedule' 'assets/schedule-friday.pdf';
wkhtmltopdf --print-media-type -O landscape 'http://127.0.0.1:8000/#/saturday_schedule' 'assets/schedule-saturday.pdf';
wkhtmltopdf --print-media-type -O landscape 'http://127.0.0.1:8000/#/sunday_schedule' 'assets/schedule-sunday.pdf';