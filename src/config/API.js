export default {
  LOGIN: {method: 'POST', url: 'Personal/Login'},

  REGISTER_PERSONAL: {method: 'POST', url: 'Personal'},
  REGISTER_PROFILE: {method: 'POST', url: 'Profile'},
  ADD_VEHICLE_DETAIL: {
    method: 'POST',
    url: 'VehicleDetail',
  },
  ADD_TECHNICAL_CONTROL_INFO: {
    method: 'POST',
    url: 'TechnicalControl',
  },
  ADD_VEHICLE_INSURANCE: {
    method: 'POST',
    url: 'VehicleInsurance',
  },
  ADD_INSURANCE_COMPANY: {
    method: 'POST',
    url: 'InsuranceCompany',
  },
  ADD_DRIVING_LICENSE: {
    method: 'POST',
    url: 'DrivingLisence',
  },
  ADD_EXERCISE_AUTHORIZATION: {
    method: 'POST',
    url: 'ExersiceAuthorization',
  },
  ADD_BUSINESS: {
    method: 'POST',
    url: 'Business',
  },
  ADD_DISPUTE: {
    method: 'POST',
    url: 'Dispute',
  },
  CHANGE_BOOKING_STATUS: {
    method: 'GET',
    url: 'Bookings/UpdateBookingsStatus',
  },
  CREATE_CHAT: {
    method: 'GET',
    url: 'Chat/getorcreatechatroom',
  },
  SEND_DISPUTE_MAIL: {
    method: 'GET',
    url: 'Personal/SendEmail/',
  },
  ADD_BOOKING_REMINDER: {method: 'POST', url: 'FeedBacks/SaveBookingReminder'},
  ADD_RATING: {method: 'POST', url: 'FeedBacks/UpdateFeedbacks'},
  MEETUP_POINTS: {method: 'GET', url: 'InstructorMeetupPoints/GetMeetUpPoints'},
  GET_RATING: {method: 'GET', url: 'FeedBacks/GetAverageRating'},
  GET_PROFILE: {method: 'GET', url: 'Personal/GetAllById'},
  REQUEST_EDIT_PROFILE: {method: 'POST', url: 'Profile/updateByAdminRequest'},
  CHANGE_PASSWORD: {method: 'POST', url: 'Personal/ChangePassword'},
  EDIT_INFO: {method: 'POST', url: 'Personal/UpdatePersonalPhotos'},
  DRIVING_SCHOOOL_APPROVAL: {method: 'POST', url: 'DrivingSchoolApproval'},
  DRIVING_SCHOOOL_MANAGER: {method: 'POST', url: 'DrivingSchoolManager'},
  ADD_MEETUP_POINT: {method: 'POST', url: 'InstructorMeetupPoints'},

  GET_PROFILE_ID: {method: 'GET', url: 'Profile/GetProfileByPersonalId'},
  GET_ALL_USERS_RATE: {method: 'GET', url: 'FeedBacks/GetAllUsersToRate'},
  GET_ALL_PACKAGES: {method: 'GET', url: 'package/GetAllPackages'},
  GET_BOOKLET_COMMENTS: {method: 'GET', url: 'Booklet/GetAllBookletComments/'},
  UPDATE_BOOKLET: {method: 'POST', url: 'Booklet/UpdateBooklet'},
  UPDATE_BOOKLET_COMMENTS: {
    method: 'POST',
    url: 'Booklet/UpdateBookletComments',
  },
  GET_CHAT_LIST: {method: 'GET', url: 'Chat/GetChatList'},
  GET_MESSAGES: {method: 'GET', url: 'Chat/GetMessages'},
  CONTACT: {method: 'GET', url: 'ContactUs'},
  UPLOAD_PICTURE: {method: 'POST', url: 'Personal/UploadProfileImage'},
  GET_PENDING_REQUESTS: {
    method: 'GET',
    url: 'Bookings/GetBookingsByIdForAllUsers_New',
  },
  GET_HISTORY: {method: 'GET', url: 'Bookings/GetAllClosedBookingsById'},
  GET_STUDENT_BOOKINGS: {method: 'GET', url: 'Bookings/GetBookingsByStudent/'},
  GET_INSTRUCTOR_BOOKINGS: {
    method: 'GET',
    url: 'Bookings/GetBookingsByInstructor',
  },
  GET_NEARBY_INSTRUCTOR: {method: 'GET', url: 'Profile/GetNearbyProfiles/'},
  GET_STUDENT_DISPUTES: {
    method: 'GET',
    url: 'Dispute/GetAllDisputeByStudentId/',
  },
  GET_INSTRUCTOR_DISPUTES: {
    method: 'GET',
    url: 'Dispute/GetAllDisputeByInstructorId/',
  },
  GET_BOOKLET: {method: 'GET', url: 'Booklet/GetAllByStudentId/'},
  GET_AVAILABILITY: {
    method: 'GET',
    url: 'Availability/GetAvailabilitySetForInstructor',
  },
  ADD_AVAILABILITY: {method: 'POST', url: 'Availability'},
  DELETE_AVAILABILITY: {
    method: 'DELETE',
    url: 'Availability/DeleteAvailability_New',
  },
  DELETE_BOOKING: {
    method: 'DELETE',
    url: 'Bookings/DeleteBookingById_Neww',
  },
  GET_BOOKING_AND_AVAILABILITY: {
    method: 'GET',
    url: 'Availability/GetAvailabilityPlusBookingsSetForInstructor_New',
  },
  GET_VEHICLE_DETAIL: {
    method: 'GET',
    url: 'VehicleDetail/GetVehicleDetailByIdAsync',
  },

  PUT_VEHICLE_DETAIL: {
    method: 'PUT',
    url: 'VehicleDetail',
  },
  GET_EXERCISE_AUTHORIZATION: {
    method: 'GET',
    url: 'ExersiceAuthorization/GetExersiceAuthorizationByIdAsync',
  },
  GET_DRIVING_LICENSE_INFO: {
    method: 'GET',
    url: 'DrivingLisence/GetDrivingLisenceByIdAsync',
  },
  GET_TECHNICAL_CONTROL_INFO: {
    method: 'GET',
    url: 'TechnicalControl/GetTechnicalControlByIdAsync',
  },

  PUT_TECHNICAL_CONTROL_INFO: {
    method: 'PUT',
    url: 'TechnicalControl',
  },
  GET_BUSINESS_STORE: {
    method: 'GET',
    url: 'Business/GetBusinessStoreByIdAsync',
  },
  GET_INSURANCE_COMPANY: {
    method: 'GET',
    url: 'InsuranceCompany/GetInsuranceCompanyByIdAsync',
  },
  GET_VEHICLE_INSURANCE: {
    method: 'GET',
    url: 'VehicleInsurance/GetVehicleInsuranceByIdAsync',
  },

  PUT_VEHICLE_INSURANCE: {
    method: 'PUT',
    url: 'VehicleInsurance',
  },
  GET_DRIVING_SCHOOL_PROFILES: {
    method: 'POST',
    url: 'Profile/GetAllDrivingSchoolsProfiles',
  },
  UPDATE_PROFILE: {
    method: 'POST',
    url: 'Profile/UpdateProfile',
  },
  REPORT_PROBLEM: {
    method: 'POST',
    url: 'ReportProblem/CreateReportProblem',
  },
  DELETE_EVENT: {
    method: 'DELETE',
    url: 'Availability/DeleteAvailability_New',
  },
  CHECK_VEHICLE: {
    method: 'GET',
    url: 'Availability/CheckVehicleAvailability',
  },
  GET_INSTRUCTOR_EVENTS: {
    method: 'GET',
    url: 'Availability/GetAvailabilityPlusBookingsSetForInstructor/',
  },
  ADD_BOOKING: {
    method: 'POST',
    url: 'Bookings',
  },
  GET_FEEDBACK_USERS: {
    method: 'GET',
    url: 'FeedBacks/GetAllUsersToRate/',
  },
  GET_FEEDBACK_DETAIL: {
    method: 'GET',
    url: 'bookings/GetBookingById/',
  },
  GET_VIEW_TEXTS: {
    method: 'GET',
    url: 'CMS/GetPageData',
  },
  GET_INSTRUCTOR_SET: {
    method: 'GET',
    url: 'Availability/GetAvailabilitySetForInstructor/',
  },
};
