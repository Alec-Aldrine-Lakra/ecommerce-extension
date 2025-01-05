import { FC, useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FemaleBodyShape,
  FemaleBodyShapes,
  Gender,
  MaleBodyShape,
  MaleBodyShapes,
} from "@constants/user";

// Define the shape of our form data
interface IFormInput {
  gender: Gender;
  height: number;
  weight: number;
  imageFile?: FileList;
  shoeSize: number;
  shirtSize: string;
  waistSize: number;
  bodyShape?: MaleBodyShape | FemaleBodyShape;
}

const UserForm: FC = () => {
  // useForm hook with defaultValues setting gender to 'male'
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      gender: Gender.MALE,
    },
  });

  // This function will be called upon form submission
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // "data" contains the form values, including the file(s) if provided
    console.log("Form Data:", data);

    // If you want to reset the form after successful submission:
    reset();
  };

  // Watch the gender field to conditionally render body shapes
  const selectedGender = watch("gender");
  const bodyShapes = useMemo(
    () => (selectedGender === Gender.MALE ? MaleBodyShapes : FemaleBodyShapes),
    [selectedGender]
  );

  useEffect(() => {
    setValue("bodyShape", undefined); // reset body shape value each time gender is switched
  }, [selectedGender, setValue]);

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2>User Measurements</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Shot Image */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="imageFile">Full Shot Image:</label>
          <input
            id="imageFile"
            type="file"
            accept="image/*"
            {...register("imageFile")}
            style={{ width: "100%" }}
          />
        </div>

        {/* Gender */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            {...register("gender", { required: true })}
            style={{ width: "100%" }}
          >
            <option value={Gender.MALE}>{Gender.MALE}</option>
            <option value={Gender.FEMALE}>{Gender.FEMALE}</option>
          </select>
          {errors.gender && <p style={{ color: "red" }}>Gender is required.</p>}
        </div>

        {/* Height */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="height">Height (cm):</label>
          <input
            id="height"
            type="number"
            {...register("height", { required: true, min: 1 })}
            style={{ width: "100%" }}
          />
          {errors.height && (
            <p style={{ color: "red" }}>
              Height is required and must be greater than 0.
            </p>
          )}
        </div>

        {/* Weight */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            id="weight"
            type="number"
            {...register("weight", { required: true, min: 1 })}
            style={{ width: "100%" }}
          />
          {errors.weight && (
            <p style={{ color: "red" }}>
              Weight is required and must be greater than 0.
            </p>
          )}
        </div>

        {/* Shoe Size */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="shoeSize">Shoe Size:</label>
          <input
            id="shoeSize"
            type="number"
            {...register("shoeSize", { required: true, min: 1 })}
            style={{ width: "100%" }}
          />
          {errors.shoeSize && (
            <p style={{ color: "red" }}>
              Shoe size is required and must be greater than 0.
            </p>
          )}
        </div>

        {/* Waist Size */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="waistSize">Waist Size (inches):</label>
          <input
            id="waistSize"
            type="number"
            {...register("waistSize", { required: true, min: 1 })}
            style={{ width: "100%" }}
          />
          {errors.waistSize && (
            <p style={{ color: "red" }}>
              Waist size is required and must be greater than 0.
            </p>
          )}
        </div>

        {/* Body Shape */}
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="bodyShape">Body Shape:</label>
          <select
            id="bodyShape"
            {...register("bodyShape", { required: true })}
            style={{ width: "100%" }}
          >
            <option value="">Select a shape</option>
            {bodyShapes.map((shape) => (
              <option key={shape} value={shape}>
                {shape}
              </option>
            ))}
          </select>
          {errors.bodyShape && (
            <p style={{ color: "red" }}>Body shape is required.</p>
          )}
        </div>

        <button type="submit" style={{ width: "100%", padding: "8px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
