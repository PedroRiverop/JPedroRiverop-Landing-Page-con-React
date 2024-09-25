import React from "react";
import Navbar from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./footer";

const dataCard = [
	{
		imgUrl: "https://picsum.photos/500/325?random=1",
		postTitle: "First Post",
		postDescription: "Aenean in lacinia turpis. Aenean iaculis urna eu arcu tincidunt hendrerit. Maecenas id diam mollis, eleifend lacus a, malesuada quam.",
		postButton: "Find More Info"
	},{	imgUrl: "https://picsum.photos/500/325?random=2",
		postTitle: "Second Post",
		postDescription: "Aenean in lacinia turpis. Aenean iaculis urna eu arcu tincidunt hendrerit.",
		postButton: "Find More Info"
	},{	imgUrl: "https://picsum.photos/500/325?random=3",
		postTitle: "Thirt Post",
		postDescription: "Aenean in lacinia turpis. Aenean iaculis urna eu arcu tincidunt hendrerit. Maecenas id diam mollis, eleifend lacus a, malesuada quam.",
		postButton: "Find More Info"
	},{	}];

//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<Navbar navBrand ="Start Bootstrap"/>
			<div className="container-lg text-center">
				<div className="row">
					<div className="col">
						<Jumbotron title = "A Warm Welcome!"
						description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium pretium neque eget blandit. Curabitur auctor ex dolor, a cursus felis viverra eu. Praesent mollis, elit eu auctor vestibulum, justo neque tempus arcu, id pellentesque augue metus at diam. Quisque ornare vitae libero id dapibus. Praesent ut libero arcu. In aliquam, neque vel vehicula fringilla, sem ipsum convallis turpis, ac congue lectus orci sed nibh."/>
					</div>
				</div>
				<div className="row pt-4">
					{dataCard.map((post, index)=>{
						return(
							<div className="col-md-3">
								<Card imgUrl = {post.imgUrl} postTitle = {post.postTitle} postDescription = {post.postDescription} postButton = {post.postButton}/>
							</div>
						);
					})}
				</div>
				
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
