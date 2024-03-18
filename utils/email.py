import threading
from django.core.mail import send_mail
from django.utils.html import format_html


def rec_send_email(email, subject, message, html, sender):
    html_content = '<p>This is an <strong>important</strong> message.</p>'
    #r.attach_alternative(html_content, "text/html")
    r = send_mail(str(subject),
              format_html(message),
              sender,
              [email],
              fail_silently=False,
              html_message=html)
    print('rec_send_email: {}'.format(r))


def send_email_in_thread(email, subject, message, html, sender):
    t1 = threading.Thread(target=rec_send_email, args=[email, subject, message, html, sender])
    t1.start()