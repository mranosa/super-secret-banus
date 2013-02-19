package com.nci.web;

import com.nci.Account;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RooWebJson(jsonObject = Account.class)
@Controller
@RequestMapping("/accounts")
public class AccountController {
}
