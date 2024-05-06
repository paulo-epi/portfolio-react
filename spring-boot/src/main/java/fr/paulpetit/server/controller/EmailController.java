package fr.paulpetit.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.paulpetit.server.model.EmailRequest;
import fr.paulpetit.server.service.EmailService;

@RestController
@RequestMapping("/api")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        emailService.sendEmail(emailRequest.getFirstName(), emailRequest.getLastName(), emailRequest.getFrom(), emailRequest.getSubject(), emailRequest.getBody());
        return "Email sent successfully!";
    }
}