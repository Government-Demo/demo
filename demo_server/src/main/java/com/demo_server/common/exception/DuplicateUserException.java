package com.demo_server.common.exception;

import com.demo_server.common.response.ErrorCode;

public class DuplicateUserException extends BaseException {

  public DuplicateUserException() {
    super(ErrorCode.DUPLICATE_USER);
  }

  public DuplicateUserException(String message) {
    super(message, ErrorCode.DUPLICATE_USER);
  }
}
