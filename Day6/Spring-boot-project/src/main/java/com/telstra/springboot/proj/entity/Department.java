package com.telstra.springboot.proj.entity;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long departmentId;

    @NotBlank(message = "Please Add Department Name")
    /*@Length(max = 5, min = 1)
    @Size(max = 10, min = 1)
    @Email
    @Positive
    @Negative
    @PositiveOrZero
    @NegativeOrZero
    */
    private String departmentName;
    private String departmentAddress;
    private String departmentCode;
}
