import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Customer } from "../Models/customer";

@Component({

    selector: 'customer',
    templateUrl : './customer.component.html'
})

export class CustomerComponent
{
    customers:Array<Customer>;
    IsAdded:boolean;

    FName:string = "";
    LName:string = "";

    //@ViewChild("myForm") CustomerForm: NgForm;

    constructor()
    {
      this.IsAdded = false;
      this.customers = new Array<Customer>();
      this.customers.push(new Customer("James", "Laurino"));
      this.customers.push(new Customer("Thomas", "Peters"));
      this.customers.push(new Customer("Slicen", "Genyer"));
      this.customers.push(new Customer("Fimkins", "deBaeck"));
      //this.CustomerForm.reset();
    }

    public Save()
    {
        this.customers.push(new Customer(this.FName, this.LName));
        this.Reset();
        this.IsAdded = false;
    }

    private Reset()
    {
      this.FName = "";
      this.LName = "";
    }

    public AddNew()
    {
      this.IsAdded = true;
    }

    public Cancel()
    {
      this.IsAdded = false;
    }
}
