import axios from 'axios';
//import React from 'react';

export class InsuranceService {
    static baseUrl = "http://localhost:2210/Users";
    static base = "http://localhost:2210/UserDependents";
    static depUrl = "http://localhost:2210/Dependents";
    static vehicleUrl = "http://localhost:2210/Vehicles";
    static updateUrl = "http://localhost:2210/UpdateVehicle";
    static packageUrl = "http://localhost:2210/UserPackage";
    static premiumUrl = "http://localhost:2210/UserPremium";
    static vehiclePremiumUrl = "http://localhost:2210/UpdateVehiclePremium";
    static vehicleInsuranceDate = "http://localhost:2210/AddVehicleDate";
    static UserIdByFlag = "http://localhost:2210/UserByFlag"


    static updateVehicle(year) {
        const putUrl = `${this.updateUrl}/${year}`
        return axios.put(putUrl);
    }

    static SetFlagTwo(email) {
        const Url = "http://localhost:2210/updateFlag";
        const putUrl = `${Url}/${email}`;
        return axios.put(putUrl);
    }

    static updatePassword(pwd) {
        const Url = "http://localhost:2210/updatePassword";
        const putUrl = `${Url}/${pwd}`
        return axios.put(putUrl);
    }

    static updateFlagOnRetype() {
        const Url = "http://localhost:2210/SetFlagOnRetype";
        return axios.put(Url);
    }

    static getUserCount() {
        const url = "http://localhost:2210/UsersCount";
        return axios.get(url);
    }

    static getOtp() {
        const Url = "http://localhost:2210/GetOtp";
        return axios.get(Url);
    }

    static updateOTP(email) {
        const url = "http://localhost:4000/setOtp";
        const putUrl = `${url}/${email}`;
        alert(putUrl);
        return axios.put(putUrl);
    }

    static getUserTenure() {
        const url = "http://localhost:2210/GetTenure";
        return axios.get(url);
    }

    static setFlagZero() {
        const putUrl = "http://localhost:2210/SetFlagZero";
        return axios.put(putUrl);
    }

    static updateFlag() {
        const putUrl = "http://localhost:2210/SetUserFlag"
        return axios.put(putUrl);
    }

    static getDependentsCount() {
        const getUrl = "http://localhost:2210/DependentsCount";
        return axios.get(getUrl);
    }

    static getUserByFlag() {
        const getUrl = "http://localhost:2210/UserId";
        return axios.get(getUrl);

    }

    static updateVehiclePremium(pre) {
        const putUrl = `${this.vehiclePremiumUrl}/${pre}`;
        alert(putUrl);
        return axios.put(putUrl);
    }

    static getUserIdByFlag() {
        return axios.get(this.UserIdByFlag);
    }

    static updateVehicleDate(userId, date) {
        const postUrl = `${this.vehicleInsuranceDate}/${userId}/${date}`;
        return axios.post(postUrl);
    }

    static getPackageLevel() {
        const getPackUrl = "http://localhost:2210/getPremiumLevel";
        return axios.get(getPackUrl);
    }
    static getUserPremium() {
        return axios.get(this.premiumUrl);
    }

    static updatePremium(pre) {
        const putUrl = `${this.premiumUrl}/${pre}`
        return axios.put(putUrl);
    }


    static updatePackage(level) {
        const packUrl = `${this.packageUrl}/${level}`;
        return axios.put(packUrl);
    }


    static getAllUsers() {
        return axios.get(this.baseUrl);
    }

    static getUserVehicles() {
        const url = "http://localhost:2210/VehicleDependents";
        return axios.get(url)
    }

    static getUserById(id) {
        const getUrl = `${this.baseUrl}/${id}`
        return axios.get(getUrl);
    }

    static getUserId(id) {
        const getUrl = `${this.base}/${id}`;
        return axios.get(getUrl);
    }

    static getAllDependents() {
        return axios.get(this.depUrl);
    }

    static addVehicle(vehicle) {
        // debugger;
        return axios.post(this.vehicleUrl, vehicle);
    }

    static updateUsers(id, flag) {
        const putUrl = `${this.baseUrl}/${id}/${flag}`
        return axios.put(putUrl);
    }

    static getUser(id) {
        const getUrl = `${this.baseUrl}/${id}`
        return axios.get(getUrl);
    }

    static addUser(user) {
        return axios.post(this.baseUrl, user);
    }

    static addDependent(dependent) {
        // alert(dependent.DependentName);
        return axios.post(this.depUrl, dependent);
    }

    static deleteUser(id) {
        // alert(id);
        const getUrl = `${this.depUrl}/${id}`
        return axios.delete(getUrl)
    }

    static getVehicles() {
        return axios.get(this.vehicleUrl)
    }

    static getUserName() {
        const url = "http://localhost:2210/getUserName";
        return axios.get(url);
    }
}