package softnerveInternship.backend.entity;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotNull;

@Document
public class Student {
	@Id
	@NotNull(message="Should not be null")
	private Long id;
	@NotNull(message="Should not be null")
	private String name;
	@NotNull(message="Should not be null")
	//@Length(max=10,message="Contact Number should be of length 10")
	private Long contactdetails;
	@NotNull(message="Should not be null")
	private String address;
	@NotNull(message="Should not be null")
	private Long pincode;
	
	public Student() {
		
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getContactdetails() {
		return contactdetails;
	}
	public void setContactdetails(Long contactdetails) {
		this.contactdetails = contactdetails;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Long getPincode() {
		return pincode;
	}
	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", contactdetails=" + contactdetails + ", address=" + address
				+ ", pincode=" + pincode + "]";
	}
}
