import { useEffect, useState } from "react";
import SeedCard, { seedInterface } from "../components/SeedCard";
import Navbar from "../components/Navbar";
import { FieldData } from "../components/Field/FieldSelector/FieldSelector";

async function getListSeed() {
	try {
		const res = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/api/seed`,
			{
				method: "GET",
			}
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch data : ${res.statusText}`);
		}

		const data = res.json();
		return data;
	} catch (error) {
		console.error("Error fetching data: ", error);
		return [];
	}
}

async function getAvailableFields() {
	try {
		const res = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/api/field`,
			{
				method: "GET",
			}
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch data : ${res.statusText}`);
		}

		const data = res.json();
		return data;
	} catch (error) {
		console.error("Error fetching data: ", error);
		return [];
	}
}

const RequestSeed = () => {
	const [listSeed, setListSeed] = useState<seedInterface[]>([]);
	const [availableFields, setAvailableFields] = useState<FieldData[]>([]);

	useEffect(() => {
		const fetchSeedData = async () => {
			try {
				const res = await getListSeed();
				const result = res.data;
				for (let i = 0; i < result.length; i++) {
					result[i].countTake = 0;
				}
				setListSeed(result);
			} catch (error) {
				console.log("Error fetching data : ", error);
			}
		};

		const fetchFieldData = async () => {
			try {
				const res = await getAvailableFields();
				const data: FieldData[] = res.data;
				const filteredData = data.filter(
					(field) => field.isPlanted === false
				);

				setAvailableFields(filteredData);
			} catch (error) {
				console.log("Error fetching data : ", error);
			}
		};

		fetchFieldData();
		fetchSeedData();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="mx-10">
				<div>
					{listSeed.length === 0 ? (
						<div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] items-center justify-center">
							<p className="font-semibold text-h5 md:text-h4 font-raleway">
								There is no seed
							</p>
						</div>
					) : (
						<div>
							{listSeed.map((item: seedInterface, index) => (
								<SeedCard
									id={item.id}
									key={index}
									name={
										item.name.charAt(0).toUpperCase() +
										item.name.slice(1)
									}
									stock={item.stock}
									availableFields={availableFields}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default RequestSeed;
