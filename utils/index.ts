function setSuccessResponse(data: any) {
  return {
    ok: true,
    data
  }
}

function setFailureResponse(message: string, errors?: any[]) {
  return {
    ok: false,
    message,
    errors
  }
}
