import ErrorHandler from "./error.js";

export const checkEmployerRole = (req, res, next) => {
    const { role } = req.user;
    if (role !== "Employer") {
        return next(new ErrorHandler("Only employers are allowed to access this resource!", 400));
    }
    next();
};

export const checkJobSeekerRole = (req, res, next) => {
    const { role } = req.user;
    if (role !== "Job Seeker") {
        return next(new ErrorHandler("Only job seekers are allowed to access this resource!", 400));
    }
    next();
};
