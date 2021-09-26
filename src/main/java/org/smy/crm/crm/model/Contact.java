package org.smy.crm.crm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
public class Contact {
    
    public @Id @GeneratedValue Long id;
    public String firstName;
    public String lastName;
    public String email;


    private Contact() {

    }

    public Contact(String firstName, String lastName, String email ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}
