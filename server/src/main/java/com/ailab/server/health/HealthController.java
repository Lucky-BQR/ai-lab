package com.ailab.server.health;

import java.time.Instant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 健康检查：前后端打通后的第一个接口，用来确认"浏览器 → Vite 代理 → Spring Boot"这条链路是通的。
 */
@RestController
@RequestMapping("/api/health")
public class HealthController {

    /** 返回体。record 是 Java 16+ 的不可变数据类，相当于 TS 里的 readonly interface。 */
    public record HealthResponse(String status, String service, Instant time) {
    }

    @GetMapping
    public HealthResponse health() {
        return new HealthResponse("UP", "ai-lab-server", Instant.now());
    }
}
