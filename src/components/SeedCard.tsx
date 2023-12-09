import Button from "./Button";
import { useState } from "react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { FieldData } from "./Field/FieldSelector/FieldSelector";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import axios from "axios";

export interface seedInterface {
	id: string;
	name: string;
	stock: number;
	soil_moisture: number;
	air_temperature: number;
	air_humidity: number;
	air_pressure: number;
	pH: number;
}

export interface seedCardInterface {
	id: string;
	name: string;
	stock: number;
	countTake?: number;
	onChangeCount?: (count: number) => void;
	availableFields: FieldData[];
}

export default function SeedCard({
	id,
	name,
	stock,
	countTake = 0,
	onChangeCount,
	availableFields,
}: seedCardInterface) {
	const { toast } = useToast();

	const [localCountTake, setLocalCountTake] = useState(countTake);
	const [selectedField, setSelectedField] = useState<string>("");

	const handleIncreaseCount = () => {
		if (localCountTake < stock) {
			setLocalCountTake(localCountTake + 1);
			if (onChangeCount) {
				onChangeCount(localCountTake + 1);
			}
		}
	};

	const handleDecreaseCount = () => {
		if (localCountTake > 0) {
			setLocalCountTake(localCountTake - 1);
			if (onChangeCount) {
				onChangeCount(localCountTake - 1);
			}
		}
	};

	const updateField = () => {
		return axios.put(
			`${import.meta.env.VITE_BACKEND_URL}/api/field/${selectedField}`,
			{ currentSeedId: selectedField },
			{
				headers: {
					Authorization: `Bearer ${
						import.meta.env.VITE_SECRET_AUTH_KEY
					}`,
				},
			}
		);
	};

	const updateSeed = () => {
		return axios.put(
			`${import.meta.env.VITE_BACKEND_URL}/api/seed/${id}`,
			{ stock: stock - localCountTake },
			{
				headers: {
					Authorization: `Bearer ${
						import.meta.env.VITE_SECRET_AUTH_KEY
					}`,
				},
			}
		);
	};

	const handlePostPlant = () => {
		if (selectedField === "") {
			toast({
				variant: "destructive",
				title: "Waduh gan, ada yang salah.",
				description: "Pilih lahan terlebih dahulu sebelum konfirmasi!",
				action: (
					<ToastAction altText="Try again">Try again</ToastAction>
				),
			});
		} else if (localCountTake <= 0) {
			toast({
				variant: "destructive",
				title: "Waduh gan, ada yang salah.",
				description:
					"Bibit yang dipilih harus lebih besar dari 0! Tolong tambah dulu bibitmu.",
				action: (
					<ToastAction altText="Try again">Try again</ToastAction>
				),
			});
		} else {
			axios
				.all([updateField(), updateSeed()])
				.then(
					axios.spread((data1, data2) => {
						console.log("data1", data1, "data2", data2);
						toast({
							variant: "success",
							description: "Bibit berhasil ditanam.",
						});
					})
				)
				.catch((error) => {
					console.log(error);
					toast({
						variant: "destructive",
						title: "Waduh gan, ada yang salah.",
						action: (
							<ToastAction altText="Try again">
								Try again
							</ToastAction>
						),
					});
				});

			// updateField()
			// 	.then(function (response) {
			// 		console.log(response);
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
		}
	};

	return (
		<div id="SeedCard">
			<div className="border border-black rounded-md p-4 relative duration-100 bg-[#EDEDED] my-[20px]">
				<div className="flex flex-col md:flex-row justify-center items-between md:justify-between md:items-center gap-y-4">
					<div>
						<h1 className="font-semibold text-h6 mb-2">{name}</h1>
						<div className="flex flex-row gap-5">
							<div className="">
								<p>Stok</p>
							</div>
							<div className="ml-4">
								<p>:</p>
							</div>
							<div className="">
								<p>{stock}</p>
							</div>
						</div>
					</div>
					<div className="justify-self-end items-end flex flex-row gap-x-8">
						{/* Here is the button going to be */}
						<Button
							className="mx-2 my-4 px-4 py-2"
							text="-"
							onClick={handleDecreaseCount}
						/>
						<p className="my-7 mx-4 font-semibold">
							{localCountTake}
						</p>
						<Button
							className="mx-2 my-4 px-4 py-2"
							text="+"
							onClick={handleIncreaseCount}
						/>
						<Dialog>
							<DialogTrigger asChild>
								<Button
									type="primary"
									className="mx-2 my-4 px-4 py-2"
									text="Plant"
									onClick={() => {}}
								/>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>Pilih lahan</DialogTitle>
									<DialogDescription>
										Pilih lahan yang akan ditanamkan oleh
										tanaman {name} sebanyak {localCountTake}{" "}
										bibit.
									</DialogDescription>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<Label>Lahan</Label>
									<Select
										onValueChange={(e) =>
											setSelectedField(e)
										}
									>
										<SelectTrigger className="">
											<SelectValue placeholder="Select lahan" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>
													Lahan yang tersedia
												</SelectLabel>
												{availableFields.map(
													(field) => {
														return (
															<SelectItem
																key={field.id}
																value={field.id}
															>
																{field.name}
															</SelectItem>
														);
													}
												)}
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<DialogFooter>
									<DialogClose asChild>
										<Button
											type="primary"
											className=""
											text="Confirm"
											onClick={handlePostPlant}
										/>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</div>
		</div>
	);
}
