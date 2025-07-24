const asyncHandler = (requestHandler) => {
  return function (req, res, next) {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

//but use the upper version
// It ensures that even non-Promise return
// values (like a regular function, not async) get wrapped as Promises.

//easier to understand
// const asyncHandler = (requestHandler) => {
//   return function (req, res, next) {
//     requestHandler(req, res, next)
//       .then(() => {
//         // Do nothing if successful
//       })
//       .catch((error) => {
//         next(error);
//       });
//   };
// };

//one more easier version
// const asyncHandler = (requestHandler) => {
//   return async function (req, res, next) {
//     try {
//       await requestHandler(req, res, next);
//     } catch (error) {
//       next(error); // Forward the error to Express error handler
//     }
//   };
// };
