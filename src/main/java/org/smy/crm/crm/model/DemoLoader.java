package org.smy.crm.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner{

    private final ContactRepository repository;


    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Contact("SM", "Y", "smy@smy.com"));        
    }
    
    @Autowired
    public DemoLoader(ContactRepository repository) {
        this.repository = repository;
    }

}
