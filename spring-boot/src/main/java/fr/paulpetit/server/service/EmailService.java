package fr.paulpetit.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

  private final JavaMailSender mailSender;

  @Autowired
  public EmailService(JavaMailSender mailSender) {
    this.mailSender = mailSender;
  }

  public void sendEmail(String firstName, String lastName, String from, String subject, String body) {
    String emailBody = "First Name: " + firstName + "\n"
        + "Last Name: " + lastName + "\n\n"
        + "From: " + from + "\n\n"
        + body;

    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo("p.petit@paul-petit.fr");
    message.setSubject(subject);
    message.setText(emailBody);
    mailSender.send(message);
  }
}