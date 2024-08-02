import { useState } from "react";
import axiosInstance from "../axiosConfig";
import { useNavigate, Link } from "react-router-dom";

function Register() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		terms: false,
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic frontend validation
		if (
			!formData.userName ||
			!formData.firstName ||
			!formData.lastName ||
			!formData.email ||
			!formData.password ||
			!formData.terms
		) {
			setError("Please fill in all fields.");
			return;
		}

		try {
			const response = await axiosInstance.post("/user/register", formData);
			console.log("Registration Successful:", response.data);
			navigate("/login");
		} catch (error) {
			console.error(
				"Registration Error:",
				error.response ? error.response.data.message : "An error occurred."
			);
			setError(
				error.response ? error.response.data.message : "An error occurred."
			);
		}
	};

	return (
		<section className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat">
			<div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[800px] h-auto p-4 md:p-8">
				<div className="w-full md:w-1/2 p-4 md:p-8 space-y-4 overflow-auto">
					<h2 className="text-2xl font-bold text-center">Join the Network</h2>
					<p className="text-center">
						Already have an account?{" "}
						<Link to="/login" className="text-orange-500 hover:underline">
							Sign in
						</Link>
					</p>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="userName"
								className="block text-sm font-medium text-gray-700"
							>
								Username
							</label>
							<input
								type="text"
								id="userName"
								name="userName"
								value={formData.userName}
								onChange={handleChange}
								placeholder="Username"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="First Name"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="lastName"
								className="block text-sm font-medium text-gray-700"
							>
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Last Name"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email Address"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Password"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
							/>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								id="terms"
								name="terms"
								className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
								checked={formData.terms}
								onChange={handleChange}
								required
							/>
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-gray-900"
							>
								I agree to the{" "}
								<Link to="#" className="text-orange-500 hover:underline">
									privacy policy
								</Link>{" "}
								and{" "}
								<Link to="#" className="text-orange-500 hover:underline">
									terms of service
								</Link>
								.
							</label>
						</div>
						{error && <div className="text-red-500 text-sm mt-2">{error}</div>}
						<div>
							<button
								type="submit"
								className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
							>
								Agree and Join
							</button>
						</div>
					</form>
				</div>
				<div className="hidden md:block w-full md:w-1/2 p-4 md:p-8 space-y-4 bg-gray-100 overflow-auto">
					<h2 className="text-2xl font-bold text-orange-700">About</h2>
					<h1 className="text-2xl font-bold text-orange-500">
						Evangadi Networks
					</h1>
					<p className="text-gray-700">
						No matter what stage of life you are in, whether you’re just
						starting elementary school or being promoted to CEO of a Fortune 500
						company, you have much to offer to those who are trying to follow in
						your footsteps.
					</p>
					<p className="text-gray-700">
						Whether you are willing to share your knowledge or you are just
						looking to meet mentors of your own, please start by joining the
						network here.
					</p>
					<button className="mt-4 py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
						Create a New Account
					</button>
				</div>
			</div>
		</section>
	);
}

export default Register;

