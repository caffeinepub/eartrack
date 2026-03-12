import Array "mo:core/Array";
import List "mo:core/List";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
  };

  let waitlistEntries = List.empty<Text>();
  let contactForms = List.empty<ContactForm>();

  public shared ({ caller }) func signupWaitlist(email : Text) : async () {
    waitlistEntries.add(email);
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let contact : ContactForm = {
      name;
      email;
      message;
    };
    contactForms.add(contact);
  };

  public query ({ caller }) func getTotalSignups() : async Nat {
    waitlistEntries.size();
  };

  public query ({ caller }) func getAllWaitlistEntries() : async [Text] {
    waitlistEntries.values().toArray();
  };

  public query ({ caller }) func getContactFormsByEmail(email : Text) : async [ContactForm] {
    let filtered = contactForms.values().filter(
      func(form) {
        form.email.contains(#text email);
      }
    );
    filtered.toArray();
  };
};
