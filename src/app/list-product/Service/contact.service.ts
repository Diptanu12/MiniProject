export class ContactService{
  users = [
    {nm:'Name ✍',ph:'Phone Number 📞',eml:'Email Id 📧' ,ara:'Write To Us 📝' }
  ]

  SaveContact(nm: any, ph: any, eml:any, ara:any){
    this.users.push({nm:nm, ph:ph,eml:eml, ara:ara});
  }
}
