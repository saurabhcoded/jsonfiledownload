import React from 'react'
import { useFormik } from "formik"
import { toast } from 'react-toastify';
import { Button, TextField } from "@mui/material"
import useApi from '../useApi'
const AddSportsman = () => {
    const endpoint = useApi();
    const formik = useFormik({
        initialValues: {
            rank: "",
            start_no: "",
            kia_id: "",
            name: "",
            dob: "",
            state: "",
            time: "",
            speed: "",
            sprint: "",
            qualifying: "",
            distance: "",
            type: ""
        },
        onSubmit: async (values, action) => {
            toast.dismiss();
            toast.loading("Adding Form Data");
            const response = await endpoint.post("/sports", values);
            console.log({ response });
            if (response.status == 200) {
                toast.dismiss();
                toast.success("Form Added Successfully");
                action.resetForm();
            } else {
                toast.dismiss();
                toast.error("Error while submitting form");
            }
        }
    })
    return (
        <div className='container py-4' style={{ maxWidth: "700px" }}>
            <h3>SPORTSMAN FORM</h3>
            <form onSubmit={formik?.handleSubmit}>
                <div className="row g-2">
                    <div className="col-12 col-lg-6">
                        <TextField label={"Rank"} fullWidth id={"rank"} name='rank' value={formik?.values?.rank} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TextField label={"Start Number"} fullWidth id={"start_no"} name='start_no' value={formik?.values?.start_no} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TextField label={"KIA ID"} fullWidth id={"kia_id"} name='kia_id' value={formik?.values?.kia_id} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12">
                        <TextField label={"Name"} fullWidth id={"name"} name='name' value={formik?.values?.name} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12">
                        <TextField label={"Dob"} fullWidth id={"dob"} name='dob' value={formik?.values?.dob} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-4">
                        <TextField label={"State"} fullWidth id={"state"} name='state' value={formik?.values?.state} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-4">
                        <TextField label={"Time"} fullWidth id={"time"} name='time' value={formik?.values?.time} onChange={formik?.handleChange} />
                    </div>
                    <div className="col-12 col-lg-4">
                        <TextField label={"Speed"} fullWidth id={"speed"} name='speed' value={formik?.values?.speed} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TextField label={"Sprint"} fullWidth id={"sprint"} name='sprint' value={formik?.values?.sprint} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TextField label={"Qualifying"} fullWidth id={"qualifying"} name='qualifying' value={formik?.values?.qualifying} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TextField label={"Distance"} fullWidth id={"distance"} name='distance' value={formik?.values?.distance} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TextField label={"Type"} fullWidth id={"type"} name='type' value={formik?.values?.type} onChange={formik?.handleChange} required={true} />
                    </div>
                    <div className="col-12">
                        <Button type='submit' variant={"contained"} size='large' fullWidth>Save</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSportsman