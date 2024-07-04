package com.vanenburgdemo.exapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import com.vs.rappit.base.logger.Logger;
import com.vs.rappit.base.logger.LoggerFactory;
import org.springframework.http.ResponseEntity;
import com.vs.rappit.base.factory.InstanceFactory;
import com.vanenburgdemo.exapp.base.controller.StableBaseController;
import com.vanenburgdemo.exapp.service.IStableService;
import com.vanenburgdemo.exapp.service.StableService;
import com.vanenburgdemo.exapp.model.Stable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "rest/stables/", produces = "application/json")
public class StableController extends StableBaseController<IStableService<Stable>, Stable> {
	private static final Logger LOGGER = LoggerFactory.getLogger(StableController.class.getName());
	public StableController(StableService stableService) {
		super(stableService);
	}
}
